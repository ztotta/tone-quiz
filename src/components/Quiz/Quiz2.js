import React, {Component} from 'react';
	
import QuizHeader2 from './Quiz-Header2';
import QuizOptions2 from './Quiz-Options2';
import QuizFooter2 from './Quiz-Footer/Quiz-Footer2';
import ToneGenerator from '../../Tone-Generator';

// Assigning random notes for the quiz:
var notes = [
	{note: 'c5', freq: 8372},
	{note: 'd5', freq: 9397},
	{note: 'e5', freq: 10548},
	{note: 'f5', freq: 11175},
	{note: 'g5', freq: 12543},
	{note: 'a5', freq: 14080},
	{note: 'b5', freq: 15804}
];

const startY = 100;
const startOpacity = 0;

class Quiz2 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			alert: 					'',
			choices:        [],
			correct:        notes[Math.floor(Math.random() * notes.length)].note,
			firstTry:       true, // if 'true', the user can still gain a point. if 'false', they can still guess for 0 points
			notes:          notes,
			numberCorrect:  0,
			questionNumber: 1,
			divArr: [
				{y: startY, o: startOpacity},
				{y: startY, o: startOpacity},
				{y: startY, o: startOpacity},
				{y: startY, o: startOpacity}
			],
			animate: true
		};
	}

	componentWillMount() {
//		console.log('componentWillMount function')
		this.pushChoices();
		this.setState({alert: 'Choose the correct note:'})
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
		
		this.setState({ choices:  choiceArr})
	}
	
	// Remove message to the user:
	clearAlert() {
		setTimeout(() => {
			this.setState({ alert: 'Choose the correct note:' });
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
				questionNumber: this.state.questionNumber + 1,
				animate: false
			}, function afterSetState() {
					this.pushChoices();
					this.setState({ animate: true })
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
			<div className={'outer-wrapper'}>
				<QuizHeader2 note={this.state.correct} alert={this.state.alert} />
				<ToneGenerator note={this.state.correct} />
				<QuizOptions2 animate={this.state.animate} choices={this.state.choices} checkChoice={this.checkChoice.bind(this)} questionNumber={this.state.questionNumber} />
				<QuizFooter2 questionNumber={this.state.questionNumber} />
			</div>
    );
  }
}

export default Quiz2;