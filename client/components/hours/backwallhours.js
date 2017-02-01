import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';


class BackWallHours extends Component{

	render(){

		return(
			<div>
				<table className="table table-sm">
					<thead>
						<tr>
							<th>Operator</th>
							<th>Hours</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Operator 1</td>
							<td>Hours 1</td>

						</tr>
						<tr>
							<td>Operator 1</td>
							<td>Hours 1</td>

						</tr>
						<tr>
							<td>Operator 1</td>
							<td>Hours 1</td>

						</tr>
						<tr>
							<td>Operator 1</td>
							<td>Hours 1</td>

						</tr>
						<tr>
							<td>Operator 1</td>
							<td>Hours 1</td>

						</tr>
					</tbody>

				</table>


			</div>

			)
	}	
}



export default BackWallHours; 