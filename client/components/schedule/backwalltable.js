import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Datetime from 'react-datetime';


import {UploadedSchedule} from '../../../imports/collections/uploadedschedule';

import TechDropdown from './table_components/techdropdown';



class BackWallScheduleTable extends Component{

  constructor(props){

    super(props);
    this.state = {rows: 4};
  }

  
  inputData(event){

    event.preventDefault();
    this.props.schedule.map((row) => {
      
      // console.log(row);
      
    });
  }

  uploadFile(event) {

    event.preventDefault();

      // console.log("shit");
      const fileVal=document.getElementById("filename");
      
       Meteor.call('importexcel', fileVal.value);
      // Meteor.call('upload.schedule', "shit")
    
    }

  render(){
    // console.log(this.state.rows);
    const children = [];

    for (var i = 0; i < this.state.rows; i++){

      children.push(<BackWallExtraRow removeChild={this.deleteRow.bind(this)} number={i} key={i} />);
    };

    return(
      <BackWallFullTable addChild={this.onAddRow.bind(this)} >
        {children}
        </BackWallFullTable>

      
      );


  }
  onAddRow(){

    this.setState({rows:this.state.rows + 1})
  }

  deleteRow(){

    
    console.log('hello');
    this.setState({rows: this.state.rows - 1})
    
  }

}

class BackWallFullTable extends Component{
  render(){

    return(
    <div>
    
    <div className="tab-content">
    <div id="Operator" className="table-responsive">
        <table className="table table-condensed" id="backWallTable">
          <thead>
                  <tr>
                    <th>Day</th>
                    <th>Operator</th>
                    <th>Role</th>
                    <th>Shift</th>
                     

                  </tr>
                </thead>

                <tbody className ="tbod">
                  <BackWallExtraRow />
                  {this.props.children}



          </tbody>
        </table>

        <button className="btn btn-primary" id="add" type="submit" onClick={this.props.addChild}>Add Shift</button>
        {/*<input id="filename" type="file"/>
        <button className="btn btn-primary" type="submit" onClick={this.uploadFile}>Upload</button>
        <button className="btn btn-primary" type="submit" onClick={this.inputData}>Input Data</button>*/}
      </div>

      </div>
      </div>
    
  );
  }


}

class BackWallExtraRow extends Component{
  render(){

    return(

      <tr>

              <td >
                
                  <input id="day" placeholder="Day"></input>
              </td>

              
               <td >

               <TechDropdown />

              </td>
              <td>
                <input placeholder="Role"></input>
              </td>
               <td>
                <div id="timePicker">
                  <Datetime dateFormat={false} input={true}/>
                </div>
                <div id="timePicker">
                  <Datetime dateFormat={false} input={true}/>
                  <span id='hours'>##</span>
                </div>

              </td>
              
              <td>
                <button className="btn" id="delete" type="delete" onClick={this.props.removeChild}>Delete</button>
              </td>
            </tr>

      );
  }


}

export default createContainer(() => {
  Meteor.subscribe('uploadedschedule');

    return {schedule: UploadedSchedule.find({}).fetch()};


  }, BackWallScheduleTable);