import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {EmployeeList} from '../../../../imports/collections/employeelist';

class TechDropdown extends Component{
	constructor(props) {
		super(props);

		this.state={items:true};
		console.log(this.state.items);


	}


	render(){

		
		$('#techdropdown').empty();
		employeeArray = [];
		this.props.employees.map(employee => {


			employeeArray.push(employee.employeeName);
		});
		// console.log(employeeArray);

	

		employeeArray.map(employee => {

			$('<option/>').val(employee).html(employee).appendTo('#techdropdown');
			// console.log('did this print twice');

		});

		return(

			<div>
				<select id="techdropdown"></select>
			</div>



			)
	}
}













export default createContainer(() => {
  Meteor.subscribe('employeelist');

    return {employees: EmployeeList.find({}).fetch()};


  }, TechDropdown);