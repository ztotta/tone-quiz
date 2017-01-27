import React, {Component} from 'react';
var Radium = require('radium');
var RadiumGrid = require('radium-grid');
const { StyleRoot } = Radium; 
const { Grid } = RadiumGrid;

import QuizHeader from './Quiz-Header';
import QuizOptions from './Quiz-Options';
import QuizFooter from './Quiz-Footer/Quiz-Footer';

const styles = {
	styleRoot: {
		height: '99%',
		padding: '5px'
	},
	grid: {
		height: '100%'
	}
}

class Quiz extends Component {
  render() {
    return (
			<StyleRoot style={styles.styleRoot}>
				<Grid style={styles.grid}>
					<QuizHeader />
					<QuizOptions />
					<QuizFooter />
				</Grid>
			</StyleRoot>
    );
  }
}

export default Quiz;