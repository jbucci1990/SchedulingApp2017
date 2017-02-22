import {Mongo} from 'meteor/mongo';

Meteor.methods({

	'hours.insert': function(employee){

		

		console.log(employee);
		console.log(employee.name);
		console.log(employee.hours);
		
		



	}, 


	
	


});



export const EmployeeHours = new Mongo.Collection('employeehours');