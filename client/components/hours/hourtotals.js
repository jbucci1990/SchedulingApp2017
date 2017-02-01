import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';


import AdminHours from './adminhours';
import TechHours from './techhours';
import BackWallHours from './backwallhours';



class HourTotals extends Component{


	render(){

		return(
			<div  id="footer"className='footer navbar-fixed-bottom'>
			<div className="panel panel-default">
				<div className="panel-heading">
				<h5><a data-toggle="collapse" data-parent="#accordian" href="#footerCollapse">Hour Totals</a></h5>
				</div>
			
			<div  id="footerCollapse" className='panel-body'>
			<div id="totalHours" className="col-md-4"><AdminHours /></div>
			<div id="totalHours" className="col-md-4"><TechHours /></div>
			<div id="totalHours" className="col-md-4"><BackWallHours /></div>

			</div>


			</div>	
			</div>
			)
	}
}




export default HourTotals;
