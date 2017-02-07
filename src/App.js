import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import                    './App.css';
import CompletedQuiz from './views/Completed-Quiz';
import ContainerMain from './containers/Container-Main';
import MotionTest    from './views/Motion-Test';
import TakingQuiz    from './views/Taking-Quiz';
import Welcome       from './views/Welcome';

class App extends Component {
  render() {
    return (
			<Router history={hashHistory}>
				<Route path='/' component={ContainerMain}>
					<IndexRoute component={Welcome} />
					<Route path='taking-quiz' component={TakingQuiz} />
					<Route path='completed-quiz/:id' component={CompletedQuiz} />
				</Route>
			</Router>
    );
  }
}

export default App;