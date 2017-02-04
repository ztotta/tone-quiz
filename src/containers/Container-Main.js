import React, { Component } from 'react';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import { Link } from 'react-router';

import ContainerApp from './Container-App';

class ContainerMain extends Component {
	
	render() {
	
		let items = [
			<SidebarItem><Link to='/'>HOME</Link></SidebarItem>,
			<SidebarItem><Link to='/taking-quiz'>START QUIZ</Link></SidebarItem>,
			<SidebarItem><Link to='/completed-quiz'>COMPLETED QUIZ</Link></SidebarItem>,
			<SidebarItem><Link to='/motion-test'>MOTION TEST</Link></SidebarItem>
		];
		
    return (
			<div>
				<Sidebar content={items} 
						background={'white'} 
						breakPoint={980}
						toggleIconColor={'white'}
						activeHightlight={'#045fb4'}
						width={200}
						color={'#90CAFF'}
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