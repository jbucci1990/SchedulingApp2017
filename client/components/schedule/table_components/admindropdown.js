import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {AdminList} from '../../../../imports/collections/adminlist';

class AdminDropdown extends Component{

	componentDidMount(){

		
		
		$('.admindropdown').empty();
		AdminArray = [];
		this.props.admins.map(admin => {


			AdminArray.push(admin.adminName);
		});
		// console.log(employeeArray);

	
		
		AdminArray.map(admin => {
			
			
			$('<option/>').val(admin).html(admin).appendTo('.admindropdown');
		// 	// console.log('did this print twice');

		});
	}

	constructor(props) {
		super(props);

		this.state={
			items:true,




		};

		// console.log(this.props.name);
		// console.log(this.state.items);


	}


	render(){

		// var myselect = document.getElementById('techdropdown');
		
		// $('#techdropdown').empty();
		// employeeArray = [];
		// this.props.employees.map(employee => {


		// 	employeeArray.push(employee.employeeName);
		// });
		// // console.log(employeeArray);

	

		// employeeArray.map(employee => {
		// 	// var objOption = document.createElement("option");
		// 	// objOption.text = employee;
		// 	// myselect.options.add(objOption);
		// 	$('<option/>').val(employee).html(employee).appendTo('#techdropdown');
		// 	// console.log('did this print twice');

		// });

		return(

			<div>
				<select className="admindropdown">
					<option>kitten</option>
				</select>
			</div>



			)
	}
}













export default createContainer(() => {
  Meteor.subscribe('adminlist');

		return {admins: AdminList.find({}).fetch()};


  }, AdminDropdown);