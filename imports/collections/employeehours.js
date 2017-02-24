import {Mongo} from 'meteor/mongo';

Meteor.methods({

	
	'hours.insert': function(employee){

		if (employee.name != ""){

		return EmployeeHours.insert({

			name: employee.name, 
			hours: employee.hours
		});

		}

		// for(object in techHoursObject){
		// 	if (object.name != employee.name){
		// 		var nameObject = {name: employee.name, hours: employee.hours};
		// 		console.log(nameObject);
		// 		techHoursObject.push(nameObject)
		// 	}
		// }

		// var nameObject = {name: employee.name, hours: employee.hours};
		// console.log(nameObject);
		// this.techHoursObject.push(nameObject)



		console.log(techHoursObject);
		
		



	}, 


	
	


});



export const EmployeeHours = new Mongo.Collection('employeehours');