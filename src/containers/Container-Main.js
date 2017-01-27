import React, { Component } from 'react';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import { Link } from 'react-router';

import ContainerApp from './Container-App';

class ContainerMain extends Component {
	
	render() {
	
		let items = [
			<SidebarItem><Link to='home'>Option 1</Link></SidebarItem>,
			<SidebarItem><Link to='home'>Option 2</Link></SidebarItem>
		];
		
    return (
			<div>
				<Sidebar content={items} 
						background={'white'} 
						breakPoint={980}
						toggleIconColor={'#045fb4'}
						activeHightlight={'#045fb4'}
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