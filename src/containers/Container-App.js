import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

class ContainerApp extends Component {
	
	render() {
    return (
			<div>
				<Header />
				<div className='App-container'>
					{this.props.children}
				</div>
				<Footer />
			</div>
    );
  }
}

export default ContainerApp;