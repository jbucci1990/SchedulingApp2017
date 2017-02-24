import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {EmployeeList} from '../../../../imports/collections/employeelist';
import {EmployeeHours} from '../../../../imports/collections/employeelist';

class TechDropdown extends Component{

	componentDidMount(){
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

	

	

	constructor(props) {
		super(props);

		this.state={
			items:true,
			tech: '',




		};
		this.handleChange= this.handleChange.bind(this);
		// console.log(this.props.name);
		// console.log(this.state.items);


	}

	
	handleChange(event){

		// var hours = this.props.hours
		
		// // console.log($("#mainTable tr"));
		// var selectedTech = [];
		// $(" #mainTable .techdropdown" ).each(function(i, obj){

		// 	// console.log(obj.value);
			

			
			
		// 	var person = {name: obj.value, hours: hours }
		// 	selectedTech.push(person);
		// });
		// 	// console.log(selectedTech);
		
		var target = event.target;
		var hours = this.props.hours;
		var tech = target.value;
		var nameHours = {name: tech, hours: hours}

		this.setState({tech:tech });
		

		// console.log(nameHours);


		// Meteor.call('hours.insert', nameHours);

		this.props.getTechName(tech);




		



			
		// });

		// console.log(weeklyTechs);


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
				<select placeholder="Choose Tech" id="techdropdown" className="techdropdown" onChange={this.handleChange}>
					
				</select>
			</div>



			)
	}
}













export default createContainer(() => {
  Meteor.subscribe('employeelist');

    return {employees: EmployeeList.find({}).fetch()};


  }, TechDropdown);