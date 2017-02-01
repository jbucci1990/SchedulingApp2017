import React, {Component} from 'react';
import ScheduleTable from './scheduletable';
import AdminScheduleTable from './adminTable';
import { Tabs, Tab } from 'react-bootstrap';


class NewDaySchedule extends Component{

	render(){


		return(
			<div className="u__narrow">
                
                <Tabs >
                    <Tab eventKey={1} title="Operators">
                        <ScheduleTable />
                    </Tab>
                    <Tab eventKey={2} title="Admins">
                        <AdminScheduleTable />
                    </Tab>
                    
                </Tabs>
            </div>

			)
	}
}


export default NewDaySchedule;