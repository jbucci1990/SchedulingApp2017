import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {EmployeeList} from '../../../imports/collections/employeelist';




class FullEmployeeList extends Component {

	

	renderList(){
		
		
		return this.props.employees.map(employee =>{

			const employeeName = employee.employeeName;
			
			
			



			return (
				<li className='list-group-item' key={employeeName}>

				<div>{employeeName}<span id="glyph-remove" className="glyphicon glyphicon-remove"></span></div>
				</li>
				);
		});

	}


	render(){

		


		return(

				

				<ul className="list-group">
					
					{this.renderList()}
				</ul>


			);



	}
}


export default createContainer(() => {
	Meteor.subscribe('employeelist');

		return {employees: EmployeeList.find({}).fetch()};


	}, FullEmployeeList);
