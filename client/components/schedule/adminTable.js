import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Datetime from 'react-datetime';


import {UploadedSchedule} from '../../../imports/collections/uploadedschedule';

import AdminDropdown from './table_components/admindropdown';



class AdminScheduleTable extends Component{

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

      children.push(<AdminExtraRow removeChild={this.deleteRow.bind(this)} number={i} key={i} />);
    };

    return(
      <AdminFullTable addChild={this.onAddRow.bind(this)} >
        {children}
        </AdminFullTable>

      
      );


  }
  onAddRow(){

    this.setState({rows:this.state.rows + 1})
  }

  deleteRow(){

    
    // console.log('hello');
    this.setState({rows: this.state.rows - 1})
    
  }

}

class AdminFullTable extends Component{
  render(){

    return(
    <div>
    
    <div className="tab-content">
    <div id="Operator" className="table-responsive">
        <table className="table table-condensed" id="adminTable">
          <thead>
                  <tr>
                    <th>Day</th>
                    <th>Admin</th>
                    <th>Shift</th>
                     

                  </tr>
                </thead>

                <tbody className ="tbod">
                 
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

class AdminExtraRow extends Component{
  render(){

    return(

      <tr>

              <td >
                
                  <input id="day" placeholder="Day"></input>
              </td>

              
               <td >
                <AdminDropdown />
               

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


  }, AdminScheduleTable);