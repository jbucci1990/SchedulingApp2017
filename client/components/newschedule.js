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



class NewSchedule extends Component{

 componentDidMount(){

 	 // console.log("MOUNTED");
    
    
    $('.techdropdown').empty();
    $('<option/>').val('').html('').appendTo('.techdropdown');
    employeeArray = [];
    this.props.employees.map(employee => {


      employeeArray.push(employee.employeeName);
    });
    // console.log(employeeArray);

  
    
    employeeArray.map(employee => {
      
      
      $('<option/>').val(employee).html(employee).appendTo('.techdropdown');
    //  // console.log('did this print twice');

    });
   
  }

saveTable(){

	
	 var WeekTable = [];
	 var weekAdminTable = [];

	 var mondayFullTable = [];
	 var tuesdayFullTable = [];
	 var wednesdayFullTable = [];
	 var thursdayFullTable =[];
	 var fridayFullTable = [];
	 var saturdayFullTable = [];
	 var sundayFullTable = [];

	 var mondayTable = [];
	 var mondayAdminTable =[];
	 var mondayBackWallTable = [];
	 var mondayFiveQTable = [];


	 var tuesdayTechTable =[];
	 var tuesdayAdminTable =[];
	 var tuesdayBackWallTable = [];
	 var tuesdayFiveQTable = [];

	 var wednesdayTechTable = [];
	 var wednesdayAdminTable =[];
	 var wednesdayBackWallTable = [];
	 var wednesdayFiveQTable = [];

	 var thursdayTechTable = [];
	 var thursdayAdminTable =[];
	 var thursdayBackWallTable = [];
	 var thursdayFiveQTable = [];


	 var fridayTechTable = [];
	 var fridayAdminTable =[];
	 var fridayBackWallTable = [];
	 var fridayFiveQTable = [];


	 var saturdayTechTable = [];
	 var saturdayAdminTable =[];
	 var saturdayBackWallTable = [];
	 var saturdayFiveQTable = [];

	 var sundayTechTable = [];
	 var sundayAdminTable =[];
	 var sundayBackWallTable = [];
	 var sundayFiveQTable = [];

	 dayList = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

	 for(day of dayList) {

	if (day == 'monday'){

  	$("#monday  #mainTable tr").each(function () {
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

$("#monday  #adminTable tr").each(function () {
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
      myTr.splice(3,1);
      mondayAdminTable.push(myTr);
      

  }
  });
mondayAdminTable.splice(0,1);

$("#monday  #backWallTable tr").each(function () {
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
      myTr.splice(4,1);
      mondayBackWallTable.push(myTr);
      

  }
  });
mondayBackWallTable.splice(0,1);

$("#monday  #5Qtable tr").each(function () {
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
      myTr.splice(4,1);
      mondayFiveQTable.push(myTr);
      

  }
  });
mondayFiveQTable.splice(0,1);

mondayFullTable.push(mondayTable, mondayAdminTable, mondayBackWallTable, mondayFiveQTable);

}



		if (day == 'tuesday'){

  	$("#tuesday  #mainTable tr").each(function () {
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
      tuesdayTechTable.push(myTr);
      

  }
  });

tuesdayTechTable.splice(0,1);

$("#tuesday  #adminTable tr").each(function () {
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
      myTr.splice(3,1);
      tuesdayAdminTable.push(myTr);
      

  }
  });
tuesdayAdminTable.splice(0,1);

$("#tuesday  #backWallTable tr").each(function () {
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
      myTr.splice(4,1);
      tuesdayBackWallTable.push(myTr);
      

  }
  });
tuesdayBackWallTable.splice(0,1);

$("#tuesday  #5Qtable tr").each(function () {
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
      myTr.splice(4,1);
      tuesdayFiveQTable.push(myTr);
      

  }
  });
tuesdayFiveQTable.splice(0,1);

tuesdayFullTable.push(tuesdayTechTable, tuesdayAdminTable, tuesdayBackWallTable, tuesdayFiveQTable);


}


if (day == 'wednesday'){

  	$("#wednesday  #mainTable tr").each(function () {
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
      wednesdayTechTable.push(myTr);
      

  }
  });

wednesdayTechTable.splice(0,1);

$("#wednesday  #adminTable tr").each(function () {
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
      myTr.splice(3,1);
      wednesdayAdminTable.push(myTr);
      

  }
  });
wednesdayAdminTable.splice(0,1);

$("#wednesday  #backWallTable tr").each(function () {
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
      myTr.splice(4,1);
      wednesdayBackWallTable.push(myTr);
      

  }
  });
wednesdayBackWallTable.splice(0,1);

$("#wednesday  #5Qtable tr").each(function () {
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
      myTr.splice(4,1);
      wednesdayFiveQTable.push(myTr);
      

  }
  });
wednesdayFiveQTable.splice(0,1);

wednesdayFullTable.push(wednesdayTechTable, wednesdayAdminTable, wednesdayBackWallTable, wednesdayFiveQTable);


}

if (day == 'thursday'){

  	$("#thursday  #mainTable tr").each(function () {
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
      thursdayTechTable.push(myTr);
      

  }
  });

thursdayTechTable.splice(0,1);

$("#thursday  #adminTable tr").each(function () {
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
      myTr.splice(3,1);
      thursdayAdminTable.push(myTr);
      

  }
  });
thursdayAdminTable.splice(0,1);

$("#thursday  #backWallTable tr").each(function () {
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
      myTr.splice(4,1);
      thursdayBackWallTable.push(myTr);
      

  }
  });
thursdayBackWallTable.splice(0,1);

$("#thursday  #5Qtable tr").each(function () {
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
      myTr.splice(4,1);
      thursdayFiveQTable.push(myTr);
      

  }
  });
thursdayFiveQTable.splice(0,1);

thursdayFullTable.push(thursdayTechTable, thursdayAdminTable, thursdayBackWallTable, thursdayFiveQTable);


}

if (day == 'friday'){

  	$("#friday  #mainTable tr").each(function () {
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
      fridayTechTable.push(myTr);
      

  }
  });

fridayTechTable.splice(0,1);

$("#friday  #adminTable tr").each(function () {
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
      myTr.splice(3,1);
      fridayAdminTable.push(myTr);
      

  }
  });
fridayAdminTable.splice(0,1);

$("#friday  #backWallTable tr").each(function () {
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
      myTr.splice(4,1);
      fridayBackWallTable.push(myTr);
      

  }
  });
fridayBackWallTable.splice(0,1);

$("#friday  #5Qtable tr").each(function () {
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
      myTr.splice(4,1);
      fridayFiveQTable.push(myTr);
      

  }
  });
fridayFiveQTable.splice(0,1);

fridayFullTable.push(fridayTechTable, fridayAdminTable, fridayBackWallTable, fridayFiveQTable);


}

if (day == 'saturday'){

  	$("#saturday  #mainTable tr").each(function () {
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
      saturdayTechTable.push(myTr);
      

  }
  });

saturdayTechTable.splice(0,1);

$("#saturday  #adminTable tr").each(function () {
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
      myTr.splice(3,1);
      saturdayAdminTable.push(myTr);
      

  }
  });
saturdayAdminTable.splice(0,1);

$("#saturday  #backWallTable tr").each(function () {
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
      myTr.splice(4,1);
      saturdayBackWallTable.push(myTr);
      

  }
  });
saturdayBackWallTable.splice(0,1);

$("#saturday  #5Qtable tr").each(function () {
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
      myTr.splice(4,1);
      saturdayFiveQTable.push(myTr);
      

  }
  });
saturdayFiveQTable.splice(0,1);

saturdayFullTable.push(saturdayTechTable, saturdayAdminTable, saturdayBackWallTable, saturdayFiveQTable);


}

if (day == 'sunday'){

  	$("#sunday  #mainTable tr").each(function () {
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
      sundayTechTable.push(myTr);
      

  }
  });

sundayTechTable.splice(0,1);

$("#sunday  #adminTable tr").each(function () {
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
      myTr.splice(3,1);
      sundayAdminTable.push(myTr);
      

  }
  });
sundayAdminTable.splice(0,1);

$("#sunday  #backWallTable tr").each(function () {
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
      myTr.splice(4,1);
      sundayBackWallTable.push(myTr);
      

  }
  });
sundayBackWallTable.splice(0,1);

$("#sunday  #5Qtable tr").each(function () {
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
      myTr.splice(4,1);
      sundayFiveQTable.push(myTr);
      

  }
  });
sundayFiveQTable.splice(0,1);


sundayFullTable.push(sundayTechTable, sundayAdminTable, sundayBackWallTable, sundayFiveQTable);


}
// console.log(mondayTable);

// OperatorSched.insert({
// 	monday: mondayTable
// })
// mondayTable.forEach((list)=>
// 	console.log(list))


 }

 WeekTable.push(mondayFullTable, tuesdayFullTable, wednesdayFullTable, thursdayFullTable, fridayFullTable, saturdayFullTable,sundayFullTable);
 console.log(WeekTable);


}
	
	
	

	render(){

		 // console.log("MOUNTED");
    
    
    $('.techdropdown').empty();
    $('<option/>').val('          ').html('').appendTo('.techdropdown');
    employeeArray = [];
    this.props.employees.map(employee => {


      employeeArray.push(employee.employeeName);
    });
    // console.log(employeeArray);

  
    
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