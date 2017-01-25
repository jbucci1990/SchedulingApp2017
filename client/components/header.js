import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

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
			
			</nav>


			);
	}
}

export default Header;
