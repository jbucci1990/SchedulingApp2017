import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Datetime from 'react-datetime';
import moment from 'moment';


import {EmployeeList} from '../../../imports/collections/employeelist';
import {UploadedSchedule} from '../../../imports/collections/uploadedschedule';
import {EmployeeHours} from '../../../imports/collections/employeelist';


import TechDropdown from './table_components/techdropdown';


class ScheduleTable extends Component{

 
  constructor(props){

    super(props);
    this.state = {
      rows: 15,
      
    };
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
     // console.log(this.props.employees); 
    const children = [];

    for (var i = 0; i < this.state.rows; i++){

      children.push(<ExtraRow  removeChild={this.deleteRow.bind(this)} number={i} key={i} />);
    };

    return(
      <div>
      <FullTable dropdown={this.props.employees} addChild={this.onAddRow.bind(this)} >
        {children}
        </FullTable>
        
      
      </div>

			
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

class FullTable extends Component{

  

    
  
  render(){
    // console.log(this.props.children);

    

    this.props.children.map((items)=>{
      // console.log(items.key)
    })
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


    // console.log("this is timeOne",  value);
    this.setState({
      timeOne: value
    });

     // if (value.format("a") === "pm" && this.state.timeTwo.format("a") === "am") {
     //  this.state.timeTwo.add(1, 'day');
     //  }
    var duration = moment.duration(this.state.timeTwo.diff(value));
    var hours = duration.asHours();
    // console.log("difference =", hours);
    if(hours < 0){

      // console.log('this is a minus!');
      hours = hours + 24;

    
    }

    this.setState({
      shiftHours: hours
    });

  }
  changetimeValueTwo(value){
    // console.log("this is timetwo:", value);
    this.setState({
      timeTwo: value
    });

     // if (value.format("a") === "am" && this.state.timeTwo.format("a") === "pm") {
     //  this.state.timeOne.add(1, 'day');
     //  }

    var duration = moment.duration(value.diff(this.state.timeOne));
    var hours = duration.asHours();
    // console.log("difference =", hours);

     if(hours < 0){

      // console.log('this is a minus!');
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

  printTable(event){
    const dayValue= this.refs.day.value;
    const timeValue= this.refs.time.value;
    const visitValue= this.refs.visit.value;
    const homeValue = this.refs.home.value;
    const umpireValue = this.refs.umpire.value;
    const stationValue = this.refs.station.value;
    const techniciain = this.refs.techdropdown;
    // console.log(techniciain);
    // console.log($('#techdropdown option:selected').text());
    // console.log(this.state.tech);
    


    const rowValues = [dayValue, timeValue, visitValue, homeValue, umpireValue];
   
      
  
  }


  render(){

    
    
    

    return(

      <tr>

              <td >
                
                  <input  ref="day" name="day" value={this.state.day} onChange ={this.handleChange} id="day" placeholder="Day"></input>
                
              </td>

              <td>
                
                  <input  ref="time" name="time"  value={this.state.time} onChange ={this.handleChange} id="time" placeholder="Time"></input>
              </td>
              <td>
                <input  ref="visit" name="visit" value={this.state.visit} onChange ={this.handleChange} id="visit" placeholder="Visit"></input>
              </td>
              <td>
                <input ref="home" name="home" value={this.state.home} onChange ={this.handleChange} id="home" placeholder="Home"></input>
              </td>
              <td>
                <input ref="umpire" name="umpire" value={this.state.umpire} onChange ={this.handleChange} id='umpire' placeholder="Umpire"></input>
              </td>
               <td id="techName" >

               <TechDropdown getTechName = { tech => this.setTech(tech)} hours = {this.state.shiftHours} />

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
              <td id="station">
                <input ref="station" name="station" value={this.state.station} onChange ={this.handleChange} id="station" placeholder="Station "></input>
              </td>

              <td>
                <button className="btn" id="delete" type="delete" onClick={this.props.removeChild}>Delete</button>
              </td>

               <td>
                <button className="btn" id="submit" type="submit" onClick={this.printTable.bind(this)}>printTable</button>
              </td>
            </tr>

      );
  }


}

export default createContainer(() => {
  Meteor.subscribe('employeelist');

    return {employees: EmployeeList.find({}).fetch()};


  }, ScheduleTable);