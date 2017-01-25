import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

class HomePage extends Component{

	CreateNewClick(event){

		event.preventDefault();

		browserHistory.push('/schedule');


	}

	render(){

		return(
			<div>
				<div className="largebox">
					<h1 className="homepageTitle">Scheduler App</h1>
					<div className="smallbox">
						<button className="homepageButtons btn btn-primary btn-large "href="#" onClick ={this.CreateNewClick.bind(this)}>Create New</button>
						<button className="homepageButtons btn btn-primary btn-large">View Old</button>
					</div>
				</div>

			</div>

			);
	}
}


export default HomePage;
