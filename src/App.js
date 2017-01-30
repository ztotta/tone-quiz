import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import                    './App.css';
import ContainerMain from './containers/Container-Main';
import TakingQuiz    from './views/Taking-Quiz';
import ToneTest      from './views/Tone-Test';
import Welcome       from './views/Welcome';

class App extends Component {
  render() {
    return (
			<Router history={hashHistory}>
				<Route path='/' component={ContainerMain}>
					<IndexRoute component={Welcome} />
					<Route path='taking-quiz' component={TakingQuiz} />
					<Route path='tone' component={ToneTest} />
				</Route>
			</Router>
    );
  }
}

export default App;