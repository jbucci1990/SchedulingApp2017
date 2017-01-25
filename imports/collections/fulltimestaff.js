import {Mongo} from 'meteor/mongo';

Meteor.methods({

	'fulltime.insert': function(fulltime){

		fulltime = fulltime; 

		return FullTimeList.insert({

			fulltimeName: fulltime, 
			createdAt: new Date()
		});
	},


	'fulltime.clear': function(){

		return FullTimeList.remove({});
	}


})


export const FullTimeList = new Mongo.Collection('fulltimelist');