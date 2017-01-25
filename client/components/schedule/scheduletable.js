import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Datetime from 'react-datetime';


import ScheduleTableRow from './scheduletablerow';
import {UploadedSchedule} from '../../../imports/collections/uploadedschedule';


class ScheduleTable extends Component{

  constructor(props){

    super(props);
    this.state = {rows: 0};
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
      <FullTable addChild={this.onAddRow.bind(this)} >
        {children}
        </FullTable>

			
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

    <div className="table-responsive">
        <table className="table table-striped" id="mainTable">
          <thead>
                  <tr>
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
    
  );
  }


}

class ExtraRow extends Component{
  render(){

    return(

      <tr>

              <td>
                
                  <input placeholder="Time"></input>
              </td>
              <td>
                <input placeholder="Visit"></input>
              </td>
              <td>
                <input placeholder="Home"></input>
              </td>
              <td>
                <input placeholder="Umpire"></input>
              </td>
               <td>
                <input list="techs" type="text" name="tech" className = "tech" placeholder="Tech" size="11"></input>
                  <datalist id="techs">
                  </datalist>

              </td>
               <td>
                <div id="timePicker">
                  <Datetime dateFormat={false} input={true}/>
                </div>
                <div id="timePicker">
                  <Datetime dateFormat={false} input={true}/>
                </div>

              </td>
              <td>
                <input  placeholder="Station "></input>
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