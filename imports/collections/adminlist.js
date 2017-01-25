import {Mongo} from 'meteor/mongo';

Meteor.methods({

	'admins.insert': function(admin){

		admin = admin; 

		return AdminList.insert({

			adminName: admin, 
			createdAt: new Date()
		});
	},


	'admins.clear': function(){

		return AdminList.remove({});
	}


})


export const AdminList = new Mongo.Collection('adminlist');