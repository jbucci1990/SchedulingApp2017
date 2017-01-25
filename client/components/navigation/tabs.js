import React, {Component} from 'react';


class Tab extends Component{

	handleClick(e){
		e.preventDefault();
		this.props.handleClick();
	}

	render(){



		return(

			<li className={this.props.isCurrent ? 'current' : null}>
				<a onClick={this.handleClick} href={this.props.url}>
					{this.props.name}
				</a>
			</li>


			);
	}
}

class Tabs extends Component{
	handleClick(tab){
		this.props.changeTab(tab);
	}


	render(){


		return(

			<nav>
				<ul>
					{this.prop.tabList.map((tab, index) =>{

						return (
							<Tab
								handleClick={this.handleClick.bind(this,index)}
								key = {tab.id}
								url = {tab.url}
								name = {tab.name}
								isCurrent = {(this.props.currentTab === index)}
								/>

							);
					})}
				</ul>	
			</nav>


			);
	}

}

class FinishedTabs extends Component{

	constructor(props){
		super(props);

		this.state = {
			tabList: tabList,
			currentTab: 0
		};
	} 

	changeTab(index){

		this.setState({currentTab: index});
	}

	render(){
		console.log('hello');

		return(

			<div>
				<Tabs 
					currentTab = {this.state.currentTab}
					tabList = {this.state.tabList}
					changeTab = {this.changeTab}

				/>

				<div className="content">
					{this.state.tabList[this.state.currentTab].content}
				</div>	
			</div>


			);
	}


}

var tabList = [
    {
        'name': 'Mike',
        'url': '/mike',
        'content':
            <div className="mike">
            	<img src="http://s.mlkshk.com/r/104TN" />
            </div>
    },
    {
        'name': 'Donnie',
        'url': '/donnie',
        'content':
            <div className="donnie">
            	<img src="http://s.mlkshk.com/r/103AG" />
            </div>
    },
    {
        'name': 'Raph',
        'url': '/raph',
        'content':
       		<div className="raph">
            	<img src="http://s.mlkshk.com/r/JAUD" />
            </div>
    },
    {
        'name': 'Leo',
        'url': '/leo',
        'content':
        	<div className="leo">
            	<img src="http://s.mlkshk.com/r/ZJPL" />
            </div>
    }
];

export default FinishedTabs;