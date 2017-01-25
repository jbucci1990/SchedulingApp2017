import {Mongo} from 'meteor/mongo';

Meteor.methods({

	'employees.insert': function(employee){

		employee = employee;

		return EmployeeList.insert({

			employeeName:employee, 
			createdAt: new Date()
		});
		



	}, 


	'employees.clear': function(){

		return EmployeeList.remove({});
	}

	


});


export const EmployeeList = new Mongo.Collection('employeelist');
