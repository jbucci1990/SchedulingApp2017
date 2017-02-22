import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import {FullTimeList} from '../../../imports/collections/fulltimestaff';



class AddFullTime extends Component {
	addEmployeeClick(event) {

		event.preventDefault();
		const employee = document.getElementById('addfulltime').value
		// console.log(employee);
		const employeeForm = document.getElementById('addfulltimeForm');
		
		Meteor.call('fulltime.insert', employee);
		employeeForm.reset();
		// console.log(this.props.fulltime);

		


		}

	clearEmployeeClick(event) {

		event.preventDefault();	
		Meteor.call('fulltime.clear');
	}

	render(){

		$('#fulltimeDropdown').empty();
		// console.log(this.props.employees);
		employeeArray = [];
		this.props.fulltime.map(employee => {


			employeeArray.push(employee.fulltimeName);
		});
		// console.log(employeeArray);

	

		employeeArray.map(employee => {

			$('<option/>').val(employee).html(employee).appendTo('#fulltimeDropdown');
			// console.log('did this print twice');

		});





		return(
			<div>
			<label>Add Full Time Staff</label>
				<form id="addfulltimeForm"> 
					<input id="addfulltime"></input>

				
				<button className="btn btn-primary " onClick ={this.addEmployeeClick.bind(this)}>Add</button>
				<button className="btn btn-danger " onClick ={this.clearEmployeeClick.bind(this)}>Clear List</button>
				
				</form>
				<select id="fulltimeDropdown"></select>

			</div>

			);
	}
}






export default createContainer(() => {
	Meteor.subscribe('fulltimelist');

		return {fulltime: FullTimeList.find({}).fetch()};



	}, AddFullTime);