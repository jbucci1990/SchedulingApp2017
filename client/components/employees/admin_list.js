import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {AdminList} from '../../../imports/collections/adminlist';




class FullAdminList extends Component {

	

	renderList(){
		
		
		return this.props.admins.map(employee =>{

			const employeeName = employee.adminName;
			
			
			



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

		return {admins: AdminList.find({}).fetch()};


	}, FullAdminList);
