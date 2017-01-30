import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';


class TechHours extends Component{

	render(){

		return(
			<div>
				<table className="table table-sm">
					<thead>
						<tr>
							<th>Tech</th>
							<th>Hours</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Tech 1</td>
							<td>Hours 1</td>

						</tr>
					</tbody>

				</table>


			</div>

			)
	}	
}



export default TechHours; 