import React, { Component } from 'react';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import { Link } from 'react-router';

import ContainerApp from './Container-App';

class ContainerMain extends Component {
	
	render() {
	
		let items = [
			<Link to='/'><SidebarItem>HOME</SidebarItem></Link>,
			<Link to='/taking-quiz'><SidebarItem>QUIZ</SidebarItem></Link>,
//			<Link to='/completed-quiz/7'><SidebarItem>RESULTS (temp)</SidebarItem></Link>
		];
		
    return (
			<div>
				<Sidebar content={items} 
						background={'#e0f7fa'} 
						breakPoint={2000}
						toggleIconColor={'white'}
						width={200}
				>
					<ContainerApp>
						{this.props.children}
					</ContainerApp>
  			</Sidebar>
			</div>
    );
  }
}

export default ContainerMain;