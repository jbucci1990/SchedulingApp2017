import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import {AdminList} from '../../../imports/collections/adminlist';



class AddAdmins extends Component {
	addEmployeeClick(event) {

		event.preventDefault();
		const employee = document.getElementById('addadmin').value
		console.log(employee);
		const employeeForm = document.getElementById('addAdminForm');
		
		Meteor.call('admins.insert', employee);
		employeeForm.reset();
		console.log(this.props.admins);

		


		}

	clearEmployeeClick(event) {

		event.preventDefault();	
		Meteor.call('admins.clear');
	}

	render(){

		$('#adminDropdown').empty();
		// console.log(this.props.employees);
		employeeArray = [];
		this.props.admins.map(employee => {


			employeeArray.push(employee.adminName);
		});
		console.log(employeeArray);

	

		employeeArray.map(employee => {

			$('<option/>').val(employee).html(employee).appendTo('#adminDropdown');
			// console.log('did this print twice');

		});





		return(
			<div>
			<label>Add Admin</label>
				<form id="addAdminForm"> 
					<input id="addadmin"></input>

				
				<button className="btn btn-primary " onClick ={this.addEmployeeClick.bind(this)}>Add</button>
				<button className="btn btn-danger " onClick ={this.clearEmployeeClick.bind(this)}>Clear List</button>
				
				</form>
				<select id="adminDropdown"></select>

			</div>

			);
	}
}






export default createContainer(() => {
	Meteor.subscribe('adminlist');

		return {admins: AdminList.find({}).fetch()};



	}, AddAdmins);