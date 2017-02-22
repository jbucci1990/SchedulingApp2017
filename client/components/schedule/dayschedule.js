    import React, {Component} from 'react';
import ScheduleTable from './scheduletable';
import AdminScheduleTable from './adminTable';
import BackWallScheduleTable from './backwalltable';
import FiveQScheduleTable from './5qtable';
import { Tabs, Tab } from 'react-bootstrap';


class NewDaySchedule extends Component{

	render(){


		return(
			<div className="u__narrow">
                
                <Tabs id="scheduletab" >
                    <Tab id="Operators" eventKey={1} title="Operators">
                        <ScheduleTable />
                    </Tab>
                    <Tab id="Admins" eventKey={2} title="Admins">
                        <AdminScheduleTable />
                    </Tab>
                    <Tab id="BackWall" eventKey={3} title="BackWall">
                        <BackWallScheduleTable />
                    </Tab>
                     <Tab id="5Q" eventKey={4} title="5Q">
                        <FiveQScheduleTable />
                    </Tab>
                    
                </Tabs>
            
            </div>

			)
	}
}


export default NewDaySchedule;