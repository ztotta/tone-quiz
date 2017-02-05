import React, {Component} from 'react';
import { router } from 'react-router';
	
import QuizHeader2   from './Quiz-Header2';
import QuizHeader3   from './Quiz-Header3';
import QuizOptions2  from './Quiz-Options/Quiz-Options2';
import QuizFooter2   from './Quiz-Footer/Quiz-Footer2';
import ToneGenerator from '../../Tone-Generator';

var notes = [
	{note: 'c5', freq: 8372},
	{note: 'd5', freq: 9397},
	{note: 'e5', freq: 10548},
	{note: 'f5', freq: 11175},
	{note: 'g5', freq: 12543},
	{note: 'a5', freq: 14080},
	{note: 'b5', freq: 15804}
];

class Quiz2 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userMessage: 		 '',
			choices:         [],
			correct:         notes[Math.floor(Math.random() * notes.length)].note, // Assigning random notes for the quiz:
			firstTry:        true, // if 'true', the user can still gain a point. if 'false', they can still guess for 0 points
			numberCorrect:   0,
			questionNumber:  1,
			notesEnter:      true,
			incorrectNotes:  false
		};
	}

	componentWillMount() {
		this.pushChoices();
		this.setState({userMessage: 'Choose the correct note:'})
	}	
	
	// Update this.state.choices with new set of correct/incorrect options to be populated:
	pushChoices() {
		var noteList = notes.filter(el => el.note !== this.state.correct)
		var choiceArr = [];
		
		choiceArr.push(noteList[Math.floor(Math.random() * noteList.length)].note); // push the decoy notes
		choiceArr.push(noteList[Math.floor(Math.random() * noteList.length)].note);
		choiceArr.push(noteList[Math.floor(Math.random() * noteList.length)].note);
		choiceArr.push(this.state.correct); // push the correct note
		
		this.setState({ choices:  choiceArr}) // update this.state.choices with the new set of notes
	}
	
	// Reset message to the user:
	clearUserMessage() {
		setTimeout(() => {
			this.setState({ userMessage: 'Choose the correct note:' });
		}, 2000)
	}
	
	checkChoice(option) {
		// if user chooses correctly, update state accordingly:
		if (option === this.state.correct) {
			this.setState({
				userMessage:    'Correct!',	
				correct:  			notes[Math.floor(Math.random() * notes.length)].note,
				numberCorrect:  this.state.firstTry ? this.state.numberCorrect + 1 : this.state.numberCorrect,
				firstTry:       true,
				questionNumber: this.state.questionNumber + 1,
				notesEnter:     false,     // reset the QuizOptions note enter animation
				incorrectNotes: false
			}, function afterSetState() {
						if (this.state.questionNumber > 10) { console.log(`switch to finished-quiz now. Got ${this.state.numberCorrect} right`) }
						this.pushChoices();
						this.setState({ 
							notesEnter: true, 	 // triggers rendering of QuizOptions noteEnter animation
						}) 
					} 
				) // this.setState()
			this.clearUserMessage();
		} else { 							
			// Alert the user that they chose incorrectly & update firstTry:
			this.setState({ 
				userMessage: 'Try again!',
				firstTry:    false,        // prevents user from earning points after choosing incorrectly
				notesEnter:  false,        // removes notesEnter QuizOptions
				incorrectNotes: false      // resets incorrectNotes QuizOptions in case of multiple incorrect choices
			}, function() {
				this.clearUserMessage();
				this.setState({ incorrectNotes: true }) // triggers rendering of incorrectNotes QuizOptions
			})
		}
	}
	
  render() {
		console.log('correct: ', this.state.correct)
		
    return (
			<div className={'outer-wrapper'}>
				{/*<QuizHeader2 note={this.state.correct} userMessage={this.state.userMessage} />*/}
				<QuizHeader3 userMessage={this.state.userMessage} incorrectNotes={this.state.incorrectNotes} notesEnter={this.state.notesEnter} />
				<ToneGenerator note={this.state.correct} />
				<QuizOptions2 incorrectNotes={this.state.incorrectNotes} notesEnter={this.state.notesEnter} choices={this.state.choices} checkChoice={this.checkChoice.bind(this)} questionNumber={this.state.questionNumber} />
				<QuizFooter2 questionNumber={this.state.questionNumber} />
			</div>
    );
  }
}

export default Quiz2;