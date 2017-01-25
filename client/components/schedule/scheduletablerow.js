import React, {Component} from 'react';
import Datetime from 'react-datetime';


class ScheduleTableRow extends Component {

	render(){

		return(

				<tr>

							<td>
								
									<input placeholder="Time"></input>
 							</td>
							<td>
								<input placeholder="Visit"></input>
							</td>
							<td>
								<input placeholder="Home"></input>
							</td>
							<td>
								<input placeholder="Umpire"></input>
							</td>
							 <td>
							 	<input list="techs" type="text" name="tech" className = "tech" placeholder="Tech" size="11"></input>
									<datalist id="techs">
									</datalist>

							</td>
							 <td>
							 	<div id="timePicker">
									<Datetime dateFormat={false} input={true}/>
								</div>
							</td>
							<td>
								<input placeholder="Station	"></input>
							</td>

							<td>
								<button className="btn" id="delete" type="delete">Delete</button>
							</td>
						</tr>

			);


	}
}

export default ScheduleTableRow;