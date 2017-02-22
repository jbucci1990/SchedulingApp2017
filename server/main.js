import {Meteor} from 'meteor/meteor';
import {EmployeeList} from '../imports/collections/employeelist';
import {UploadedSchedule} from '../imports/collections/uploadedschedule';
import {AdminList} from '../imports/collections/adminlist';
import {FullTimeList} from '../imports/collections/fulltimestaff';
import {EmployeeHours} from '../imports/collections/employeehours';

import {Mongo} from 'meteor/mongo';
import Excel from 'exceljs';

Meteor.startup(() => {

	Meteor.publish('employeelist', function(){


		return EmployeeList.find({});
	});

	Meteor.publish('uploadedschedule', function(){


		return UploadedSchedule.find({});
	});

	Meteor.publish('adminlist', function(){


		return AdminList.find({});
	});

	Meteor.publish('fulltimelist', function(){

		return FullTimeList.find({});
	});

	Meteor.publish('employeehours', function(){

		return EmployeeHours.find({});
	});



});

Meteor.methods({

	importexcel(){
	UploadedSchedule.remove({});
	
	


     
	var workbook = new Excel.Workbook();


		

	workbook.xlsx.readFile('/Users/bucci/Desktop/RossUmpireSchedule.xlsx')
    .then(Meteor.bindEnvironment(() =>{
		// use workbook 

        var worksheet = workbook.getWorksheet('sheet');
        worksheet.eachRow({ includeEmpty: true }, Meteor.bindEnvironment((row, rowNumber) => {
        	// console.log(row.values);
        	
        	
        	
        	
        	UploadedSchedule.insert(row.values);
        	

        }));

      
    
    }));


}

	

});