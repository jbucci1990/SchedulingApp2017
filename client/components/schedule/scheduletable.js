import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Datetime from 'react-datetime';


import ScheduleTableRow from './scheduletablerow';
import {UploadedSchedule} from '../../../imports/collections/uploadedschedule';

import TechDropdown from './table_components/techdropdown';


class ScheduleTable extends Component{

  constructor(props){

    super(props);
    this.state = {rows: 15};
  }

  
  inputData(event){

    event.preventDefault();
    this.props.schedule.map((row) => {
      
      console.log(row);
      
    });
  }

  uploadFile(event) {

    event.preventDefault();

      console.log("shit");
      const fileVal=document.getElementById("filename");
      
       Meteor.call('importexcel', fileVal.value);
      // Meteor.call('upload.schedule', "shit")
    
    }

	render(){
    console.log(this.state.rows);
    const children = [];

    for (var i = 0; i < this.state.rows; i++){

      children.push(<ExtraRow removeChild={this.deleteRow.bind(this)} number={i} key={i} />);
    };

    return(
      <div>
      <FullTable addChild={this.onAddRow.bind(this)} >
        {children}
        </FullTable>
        
      
      </div>

			
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

class FullTable extends Component{
  render(){

    return(
    <div>
    
    <div className="tab-content">
    <div id="Operator" className="table-responsive">
        <table className="table table-condensed" id="mainTable">
          <thead>
                  <tr>
                    <th>Day</th>
                    <th>Time (ET)</th>
                      <th>Visit Team</th>
                      <th>Home Team</th>      
                      <th> Umpire </th>
                      <th> Tech </th>             
                      <th> Shift Time </th>
                      <th> Station </th>

                  </tr>
                </thead>

                <tbody className ="tbod">
                  <ExtraRow />
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

class ExtraRow extends Component{
  render(){

    return(

      <tr>

              <td >
                
                  <input id="day" placeholder="Day"></input>
              </td>

              <td>
                
                  <input id="time" placeholder="Time"></input>
              </td>
              <td>
                <input id="visit" placeholder="Visit"></input>
              </td>
              <td>
                <input  id="home" placeholder="Home"></input>
              </td>
              <td>
                <input id='umpire' placeholder="Umpire"></input>
              </td>
               <td >

               <TechDropdown />

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
              <td id="station">
                <input  id="station" placeholder="Station "></input>
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


  }, ScheduleTable);