import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import Datetime from 'react-datetime';

class Header extends Component{

	CreateNewClick(event){

		event.preventDefault();

		browserHistory.push('/schedule');


	}
	homePageClick(event){

		event.preventDefault();

		browserHistory.push('/');


	}

	AddEmployees(event){

		event.preventDefault();
		browserHistory.push('/addemployees')
	}

	render() {
		var newDate = new Date();
		var month = newDate.getUTCMonth() + 1;
		var day = newDate.getUTCDate();
		var year = newDate.getUTCFullYear();

		fullDate = month + '/' + day + '/' + year;

		// console.log(newDate);

		return(
			<nav className="navbar navbar-default">
			<div className="navbar-header">

				<div className="navbar-brand"><a href="#" onClick= {this.homePageClick.bind(this)}>Scheduler</a></div>

			</div>

			<ul className="nav navbar-nav">
				
				<li>
				<a href="#" onClick= {this.CreateNewClick.bind(this)}>Create New</a>
				</li>
				<li><a>View Old</a></li>
				<li>
					<a href="#" onClick={this.AddEmployees.bind(this)}>Add Employees</a>
				</li>
			</ul>
			<h3 id="todaysDate">{fullDate}</h3>
			</nav>


			);
	}
}

export default Header;
