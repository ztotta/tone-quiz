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

// Assigning random notes for the quiz:
var notes = [
	{note: 'c4', freq: 4186},
	{note: 'd4', freq: 4699},
	{note: 'e4', freq: 5274},
	{note: 'f4', freq: 5588},
	{note: 'g4', freq: 6272},
	{note: 'a4', freq: 7040},
	{note: 'b4', freq: 7902},
	{note: 'c5', freq: 8372},
	{note: 'd5', freq: 9397},
	{note: 'e5', freq: 10548},
	{note: 'f5', freq: 11175},
	{note: 'g5', freq: 12543},
	{note: 'a5', freq: 14080},
	{note: 'b5', freq: 15804}
];
var noteObj = notes[Math.floor(Math.random() * notes.length)];
var note    = noteObj.note;

class Quiz extends Component {
  render() {
    return (
			<StyleRoot style={styles.styleRoot}>
				<Grid style={styles.grid}>
					<QuizHeader note={note} />
					<QuizOptions note={note} notes={notes} />
					<QuizFooter />
				</Grid>
			</StyleRoot>
    );
  }
}

export default Quiz;