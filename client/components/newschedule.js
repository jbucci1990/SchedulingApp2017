import React, {Component} from 'react';
import Datetime from 'react-datetime';
import ScheduleTable from './schedule/scheduletable';
import AddEmployees from './employees/addemployees';
import FullEmployeeList from './employees/employee_list';
import FinishedTabs from './navigation/tabs.js';
import HourTotals from './hours/hourtotals';

class NewSchedule extends Component{

	render(){

		return(
			<div className="container-fluid">

			<div className="panel-group">

				<div className="panel panel-default">

					<div className="panel-heading">

						<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordian" href="#collapse1">
						Monday</a>
						</h4>
					</div>

					<div id="collapse1" className="panel-collapse collapse">
					<ScheduleTable />
					</div>

				</div>

				<div className="panel panel-default">

					<div className="panel-heading">

						<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordian" href="#collapse2">
						Tuesday</a>
						</h4>
					</div>

					<div id="collapse2" className="panel-collapse collapse">
					<ScheduleTable />
					</div>

				</div>

				<div className="panel panel-default">

					<div className="panel-heading">

						<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordian" href="#collapse3">
						Wednesday</a>
						</h4>
					</div>

					<div id="collapse3" className="panel-collapse collapse">
					<ScheduleTable />
					</div>

				</div>

				<div className="panel panel-default">

					<div className="panel-heading">

						<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordian" href="#collapse4">
						Thursday</a>
						</h4>
					</div>

					<div id="collapse4" className="panel-collapse collapse">
					<ScheduleTable />
					</div>

				</div>

				<div className="panel panel-default">

					<div className="panel-heading">

						<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordian" href="#collapse5">
						Friday</a>
						</h4>
					</div>

					<div id="collapse5" className="panel-collapse collapse">
					<ScheduleTable />
					</div>

				</div>

				<div className="panel panel-default">

					<div className="panel-heading">

						<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordian" href="#collapse6">
						Saturday</a>
						</h4>
					</div>

					<div id="collapse6" className="panel-collapse collapse">
					<ScheduleTable />
					</div>

				</div>

				<div className="panel panel-default">

					<div className="panel-heading">

						<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordian" href="#collapse7">
						Sunday</a>
						</h4>
					</div>

					<div id="collapse7" className="panel-collapse collapse">
					<ScheduleTable />
					</div>

				</div>



			



			</div>
			<div>
			<HourTotals />


			</div>

			</div>
			);
	}
}


export default NewSchedule;
