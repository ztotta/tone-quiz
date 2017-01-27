import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import './App.css';
import ContainerMain from './containers/Container-Main';
import TakingQuiz from './views/Taking-Quiz';

class App extends Component {
  render() {
    return (
			<Router history={hashHistory}>
				<Route path='/' component={ContainerMain}>
					<Route path='taking-quiz' component={TakingQuiz} />
				</Route>
			</Router>
    );
  }
}

export default App;