import React, {Component} from 'react';
import Datetime from 'react-datetime';
import ScheduleTable from './schedule/scheduletable';
import NewDaySchedule from './schedule/dayschedule';

import {createContainer} from 'meteor/react-meteor-data';
import {EmployeeList} from '../../imports/collections/employeelist';


import AddEmployees from './employees/addemployees';
import FullEmployeeList from './employees/employee_list';
import FinishedTabs from './navigation/tabs.js';
import HourTotals from './hours/hourtotals';


import {OperatorSched} from '../../imports/collections/operatorschedule';


import TestTable from './schedule/testtable';

class NewSchedule extends Component{

 componentDidMount(){

 	 console.log("MOUNTED");
    
    
    $('.techdropdown').empty();
    employeeArray = [];
    this.props.employees.map(employee => {


      employeeArray.push(employee.employeeName);
    });
    console.log(employeeArray);

  
    
    employeeArray.map(employee => {
      
      
      $('<option/>').val(employee).html(employee).appendTo('.techdropdown');
    //  // console.log('did this print twice');

    });
   
  }

saveTable(){

	

	 var mondayTable = [];
  $("#monday #mainTable tr").each(function () {
      var myTr = [];
     if (!$(this).children('td').children('div').hasClass("rdtCounters")){
      $('td', this).each(function() {

      	
      	// tdDvis = $(this).children('div');
      	// console.log(tdDvis);
      	 if (!$(this).children('div').hasClass("rdtCounters")){
      	 	
          myTr.push($(this).find(":input").val());
      }
          // console.log(myTr);
      });

       // console.log(myTr);
      myTr.splice(8,2);
      mondayTable.push(myTr);
      

  }
  });

mondayTable.splice(0,1);





OperatorSched.insert({
	monday: mondayTable
})
mondayTable.forEach((list)=>
	console.log(list))

}
	
	
	

	render(){

		 console.log("MOUNTED");
    
    
    $('.techdropdown').empty();
    employeeArray = [];
    this.props.employees.map(employee => {


      employeeArray.push(employee.employeeName);
    });
    console.log(employeeArray);

  
    
    employeeArray.map(employee => {
      
      
      $('<option/>').val(employee).html(employee).appendTo('.techdropdown');
    //  // console.log('did this print twice');

    });

		

		return(
			<div id="schedule" className="container-fluid">

			<div className="panel-group">

				<div className="panel panel-default">

					<div className="panel-heading">

						<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordian" href="#monday">
						Monday</a>
						</h4>
					</div>

					<div id="monday" className="panel-collapse collapse">
					<NewDaySchedule key="Monday"/>
					
					</div>

				</div>

				<div className="panel panel-default">

					<div className="panel-heading">

						<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordian" href="#tuesday">
						Tuesday</a>
						</h4>
					</div>

					<div id="tuesday" className="panel-collapse collapse">
					<NewDaySchedule />
					</div>

				</div>

				<div className="panel panel-default">

					<div className="panel-heading">

						<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordian" href="#wednesday">
						Wednesday</a>
						</h4>
					</div>

					<div id="wednesday" className="panel-collapse collapse">
					<NewDaySchedule />
					</div>

				</div>

				<div className="panel panel-default">

					<div className="panel-heading">

						<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordian" href="#thursday">
						Thursday</a>
						</h4>
					</div>

					<div id="thursday" className="panel-collapse collapse">
					<NewDaySchedule />
					</div>

				</div>

				<div className="panel panel-default">

					<div className="panel-heading">

						<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordian" href="#friday">
						Friday</a>
						</h4>
					</div>

					<div id="friday" className="panel-collapse collapse">
					<NewDaySchedule />
					</div>

				</div>

				<div className="panel panel-default">

					<div className="panel-heading">

						<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordian" href="#saturday">
						Saturday</a>
						</h4>
					</div>

					<div id="saturday" className="panel-collapse collapse">
					<NewDaySchedule />
					</div>

				</div>

				<div className="panel panel-default">

					<div className="panel-heading">

						<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordian" href="#sunday">
						Sunday</a>
						</h4>
					</div>

					<div id="sunday" className="panel-collapse collapse">
					<NewDaySchedule />	
					</div>

				</div>



			


			 <button className="btn btn-primary" id="add" type="submit" onClick={this.saveTable}>Save</button>
			</div>
			<div>
			


			</div>

			</div>
			);
	}
}


export default createContainer(() => {
  Meteor.subscribe('employeelist');

    return {employees: EmployeeList.find({}).fetch()};


  }, NewSchedule);