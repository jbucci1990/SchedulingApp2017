import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Datetime from 'react-datetime';


class AdminTable extends Component {

	render(){



		return(

			<div>
				

				<div className="table-responsive tab-pane fad in active">
        <table className="table table-sm" id="mainTable">
          <thead>
                  <tr>
                   
                      <th> Tech </th>             
                      <th> Shift Time </th>
                      

                  </tr>
                </thead>

                <tbody className ="tbod">

                	<tr>
                		
                		<td><input placeholder="Tech"></input></td>
                		<td><input placeholder="Time"></input></td>
                	</tr>
                  	



          </tbody>
        </table>
			</div>
			</div>


			)
	}
}


export default AdminTable;