import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Datetime from 'react-datetime';
import moment from 'moment';


import {EmployeeList} from '../../../imports/collections/employeelist';
import {UploadedSchedule} from '../../../imports/collections/uploadedschedule';
import {EmployeeHours} from '../../../imports/collections/employeelist';

import TechDropdown from './table_components/techdropdown';



class FiveQScheduleTable extends Component{

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

      children.push(<FiveQExtraRow removeChild={this.deleteRow.bind(this)} number={i} key={i} />);
    };

    return(
      <FiveQFullTable dropdown={this.props.employees} addChild={this.onAddRow.bind(this)} >
        {children}
        </FiveQFullTable>

      
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

class FiveQFullTable extends Component{
  render(){

    return(
    <div>
    
    <div className="tab-content">
    <div id="Operator" className="table-responsive">
        <table className="table table-condensed" id="5Qtable">
          <thead>
                  <tr>
                    <th>Day</th>
                    <th>Operator</th>
                    <th>Role</th>
                    <th>Shift</th>
                     

                  </tr>
                </thead>

                <tbody className ="tbod">
                  <FiveQExtraRow />
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

class FiveQExtraRow extends Component{

  componentDidUpdate(){

    // console.log('updated');
    var tech = this.state.tech;
    var hours = this.state.shiftHours;

    var nameHours = {name: tech, hours: hours}

    Meteor.call('hours.insert', nameHours);

    // console.log('this is the tech  ', this.state.tech, "  and this is his hours: ", this.state.shiftHours)
  }

   constructor(props){

    super(props);
    this.state = {
      day: "",
      time: "", 
      visit: "", 
      home: "", 
      umpire: "", 
      tech: "",
      station: "",
      timeOne: "", 
      timeTwo: "",
      shiftHours: 0


        };
    // this.changetimeValueOne = this.changetimeValueOne.bind(this);
    // this.changetimeValueTwo = this.changetimeValueTwo.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changetimeValueOne(value){


    console.log("this is timeOne",  value);
    this.setState({
      timeOne: value
    });

     // if (value.format("a") === "pm" && this.state.timeTwo.format("a") === "am") {
     //  this.state.timeTwo.add(1, 'day');
     //  }
    var duration = moment.duration(this.state.timeTwo.diff(value));
    var hours = duration.asHours();
    console.log("difference =", hours);
    if(hours < 0){

      console.log('this is a minus!');
      hours = hours + 24;

    
    }

    this.setState({
      shiftHours: hours
    });

  }
  changetimeValueTwo(value){
    console.log("this is timetwo:", value);
    this.setState({
      timeTwo: value
    });

     // if (value.format("a") === "am" && this.state.timeTwo.format("a") === "pm") {
     //  this.state.timeOne.add(1, 'day');
     //  }

    var duration = moment.duration(value.diff(this.state.timeOne));
    var hours = duration.asHours();
    console.log("difference =", hours);

     if(hours < 0){

      console.log('this is a minus!');
      hours = hours + 24;

      
    }

    this.setState({
      shiftHours: hours
    });




  }

  setTech(tech){

    this.setState({
      tech: tech
    });

  }
  handleChange(event){

    const target = event.target;
    const value = target.value; 
    const name = target.name;
    
    this.setState({
      [name]: value
    });



    

  }

  handleSubmit(event){
    
    event.preventDefault();
  }
  render(){

    return(

      <tr>

              <td >
                
                   <input  ref="day" name="day" value={this.state.day} onChange ={this.handleChange} id="day" placeholder="Day"></input>
                
              </td>

              
              <td id="techName" >

               <TechDropdown getTechName = { tech => this.setTech(tech)} hours = {this.state.shiftHours} />

              </td>
              <td>
                <input placeholder="Role"></input>
              </td>
               <td>
                <div id="timePicker">
                  <Datetime  ref="starttime"  onBlur={this.changetimeValueOne.bind(this)} dateFormat={false}  input={true} inputProps={{placeholder:'start'}}/>
                </div>
                <div id="timePicker">
                  <Datetime ref="endtime"  onBlur={this.changetimeValueTwo.bind(this)} dateFormat={false}  input={true} inputProps={{placeholder:'end'}}/>
                  <p id='hours' className="hours">{this.state.shiftHours}</p>
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
   Meteor.subscribe('employeelist');

    return {employees: EmployeeList.find({}).fetch()};


  }, FiveQScheduleTable);