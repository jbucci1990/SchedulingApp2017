import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


import App from './components/app';
import NewSchedule from './components/newschedule';
import HomePage from './components/homepage';
import AddEmployees from './components/employees/addemployees';

import {EmployeeList} from '../imports/collections/employeelist';
import {UploadedSchedule} from '../imports/collections/uploadedschedule';


const routes = (

	<Router history={browserHistory}>
		<Route path='/' component= {App}>
			<IndexRoute component={HomePage} />
			<Route path='schedule' component={NewSchedule} />
			<Route path='addemployees' component={AddEmployees}/>

		</Route>

	</Router>



	);

Meteor.startup(() => {


	ReactDOM.render(routes, document.querySelector('.render-target'));
});