import React, {Component} from 'react';
//import { browserHistory, history } from 'react-router';
var Radium = require('radium');
var RadiumGrid = require('radium-grid');
const { StyleRoot } = Radium; 
const { Grid } = RadiumGrid;

import QuizHeader from './Quiz-Header';
import QuizOptions from './Quiz-Options';
import QuizFooter from './Quiz-Footer/Quiz-Footer';

const styles = {
	styleRoot: {
		padding: '5px',
		margin: '0 auto'
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

class Quiz extends Component {
	constructor(props) {
		super(props);

		this.state = {
			alert: 					'',
			choices:        [],
			correct:        notes[Math.floor(Math.random() * notes.length)].note,
			firstTry:       true, // if 'true', the user can still gain a point. if 'false', they can still guess for 0 points
			notes:          notes,
			numberCorrect:  0,
			questionNumber: 1
		};
	}

	componentWillMount() {
//		console.log('componentWillMount function')
		this.pushChoices();
	}
	
	// Update this.state.choices with new set of correct/incorrect options to be populated:
	pushChoices() {
//		console.log('pushChoices function')
		
		var noteList = this.state.notes.filter(el => el.note !== this.state.correct)
		var choiceArr = [];
		
		choiceArr.push(noteList[Math.floor(Math.random() * noteList.length)].note);
		choiceArr.push(noteList[Math.floor(Math.random() * noteList.length)].note);
		choiceArr.push(noteList[Math.floor(Math.random() * noteList.length)].note);
		choiceArr.push(this.state.correct);
		
		this.setState({ 
			choices:  choiceArr
		})
	}
	
	// Remove message to the user:
	clearAlert() {
		setTimeout(() => {
			this.setState({ alert: '' });
		}, 2000)
	}
	
	checkChoice(option) {
//		console.log('checkChoice function')
		// if user chooses correctly, update state accordingly:
		if (option === this.state.correct) {
			this.setState({
				alert:          'Correct!',	
				correct:  			notes[Math.floor(Math.random() * notes.length)].note,
				numberCorrect:  this.state.firstTry ? this.state.numberCorrect + 1 : this.state.numberCorrect,
				firstTry:       true,
				questionNumber: this.state.questionNumber + 1
			}, function afterSetState() {
					this.pushChoices();
//					this.state.questionNumber === 2 ? this.context.router.transitionTo('completed-quiz') : console.log('no victory yet')
//					console.log('setState callback entered')
//					console.log('numberCorrect: ', this.state.numberCorrect)
				})
			
			this.clearAlert();
		} else { 							
			// Alert the user that they missed it & update firstTry:
			this.setState({ 
				alert:    'Try again!',
				firstTry: false
			}, function() {
				this.clearAlert();
			})
		}
	}
	
  render() {
//		console.log('render function')
		console.log('correct: ', this.state.correct)
		
    return (
			<StyleRoot style={styles.styleRoot}>
				<Grid style={styles.grid}>
					<QuizHeader note={this.state.correct} alert={this.state.alert} />
					<QuizOptions choices={this.state.choices} checkChoice={this.checkChoice.bind(this)} questionNumber={this.state.questionNumber} />
					<QuizFooter questionNumber={this.state.questionNumber} />
				</Grid>
			</StyleRoot>
    );
  }
}

export default Quiz;