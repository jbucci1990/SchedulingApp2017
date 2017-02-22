	import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {EmployeeList} from '../../../imports/collections/employeelist';

import FullEmployeeList from './employee_list';
import FullAdminList from './admin_list';
import AddAdmins from './admins';

import AddFullTime from './fulltime.js';
import FullStaffList from './fulltime_list';


class AddEmployees extends Component {


	componentDidUpdate(){

		$('#employeeDropdown').empty();
		// console.log(this.props.employees);
		employeeArray = [];
		console.log(this.props.employees);
		this.props.employees.map(employee => {


			employeeArray.push(employee.employeeName);
		});
		// console.log(employeeArray);

	

		employeeArray.map(employee => {

			$('<option/>').val(employee).html(employee).appendTo('#employeeDropdown');
			// console.log('did this print twice');

		});

		

		
		   

	}

	addEmployeeClick(event) {

		event.preventDefault();
		const employee = document.getElementById('addemployee').value
		const employeeForm = document.getElementById('addEmpForm');
		
		Meteor.call('employees.insert', employee);
		employeeForm.reset();
		// console.log(this.props.employees);

		


		}

	clearEmployeeClick(event) {

		event.preventDefault();	
		Meteor.call('employees.clear');
	}

	

		

	render(){
		

		
	

				
		return(
			<div className="container-fluid">
			<div className="row">
			<div id="addemployeeDiv" className="col-md-4">

				<label>Add Operator</label>
				<form id="addEmpForm"> 
					<input id="addemployee"></input>

				
				<button className="btn btn-primary " onClick ={this.addEmployeeClick.bind(this)}>Add</button>
				<button className="btn btn-danger " onClick ={this.clearEmployeeClick.bind(this)}>Clear List</button>
				
				</form>
				<select id="employeeDropdown"></select>

				<FullEmployeeList />
				
			</div>
			<div id="addemployeeDiv" className="col-md-4">

				<AddAdmins />
				<FullAdminList />
				
			</div>
			<div id="addemployeeDiv" className="col-md-4">

				<AddFullTime />
				<FullStaffList />
				
			</div>
			</div>

			


			</div>


			);

		

	}

}


export default createContainer(() => {
	Meteor.subscribe('employeelist');

		return {employees: EmployeeList.find({}).fetch()};



	}, AddEmployees);