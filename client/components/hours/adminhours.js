import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';


class AdminHours extends Component{

	render(){

		return(
			<div>
				<table className="table table-sm">
					<thead>
						<tr>
							<th>Admin</th>
							<th>Hours</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Admin 1</td>
							<td>Hours 1</td>

						</tr>
						<tr>
							<td>Admin 1</td>
							<td>Hours 1</td>

						</tr>
						<tr>
							<td>Admin 1</td>
							<td>Hours 1</td>

						</tr>
						<tr>
							<td>Admin 1</td>
							<td>Hours 1</td>

						</tr>


					</tbody>

				</table>


			</div>

			)
	}	
}



export default AdminHours; 