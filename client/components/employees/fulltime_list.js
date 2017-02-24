import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {FullTimeList} from '../../../imports/collections/fulltimestaff';




class FullStaffList extends Component {

	

	renderList(){
		
		
		return this.props.fulltime.map(employee =>{

			const employeeName = employee.fulltimeName;
			
			
			



			return (
				<li className='list-group-item' key={employeeName}>

				<div>{employeeName}<a href="#" ><span id="glyph-remove" className="glyphicon glyphicon-remove"></span></a></div>
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
	Meteor.subscribe('adminlist');

		return {fulltime: FullTimeList.find({}).fetch()};


	}, FullStaffList);
