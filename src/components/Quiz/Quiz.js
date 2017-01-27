import React, {Component} from 'react';
var Radium = require('radium');
var RadiumGrid = require('radium-grid');
const { StyleRoot } = Radium; 
const { Grid } = RadiumGrid;

import QuizHeader from './Quiz-Header';
import QuizOptions from './Quiz-Options';
import QuizFooter from './Quiz-Footer/Quiz-Footer';

class Quiz extends Component {
  render() {
    return (
			<StyleRoot>
				<Grid>
					<QuizHeader />
					<QuizOptions />
					<QuizFooter />
				</Grid>
			</StyleRoot>
    );
  }
}

export default Quiz;