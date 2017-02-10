import React, {Component, PropTypes} from 'react';
	
import UserMessage   from './User-Message';
import QuizOptions   from './Quiz-Options';
import QuizProgress  from './Quiz-Progress';
import ToneGenerator from './Tone-Generator';

var notes = [
	{note: 'c5', freq: 8372},
	{note: 'd5', freq: 9397},
	{note: 'e5', freq: 10548},
	{note: 'f5', freq: 11175},
	{note: 'g5', freq: 12543},
	{note: 'a5', freq: 14080},
	{note: 'b5', freq: 15804}
];

class Quiz extends Component {
	static contextTypes = {
		router: PropTypes.object
	}
	
	constructor(props) {
		super(props);

		this.state = {
			userMessage: 		 '',   // will hold the message to be displayed to the user during the quiz
			choices:         [],   // will hold the notes to be displayed for each question
			correct:         notes[Math.floor(Math.random() * notes.length)].note, // Assigning random correct note for the quiz
			firstTry:        true, // if 'true', the user can still gain a point. if 'false', they can still guess for 0 points
			numberCorrect:   0,
			questionNumber:  1,
			notesEnter:      true, // when 'true', triggers notesEnter animation in QuizOptions
			incorrectNotes:  false // when 'true', triggers incorrectNotes animation in QuizOptions
		};
	}

	componentWillMount() {
		this.pushChoices();
		this.setState({userMessage: 'Choose the correct note'})
	}	
	
	// Update this.state.choices with new set of correct/incorrect options to be populated:
	pushChoices() {
		var noteList = notes.filter(el => el.note !== this.state.correct) // create a filtered list w/o the correct note
		var choiceArr = [];                                       // will hold the notes to be set to this.state.choices

		// pull random notes from noteList w/o repeating:
		var noteA = noteList[Math.floor(Math.random() * 6)].note
		var noteB = noteList.filter(el => el.note !== noteA)[Math.floor(Math.random() * 5)].note
		var noteC = noteList.filter(el => el.note !== noteA && el.note !== noteB)[Math.floor(Math.random() * 4)].note

		choiceArr.push(noteA, noteB, noteC, this.state.correct)   // push the correct and decoy notes to the array
		
		this.setState({ choices:  choiceArr}) // replace this.state.choices with the new set of notes array
	}
	
	// Reroutes to the completed quiz page:
	toCompletedQuiz = () => {
		console.log('entered reroute()');
		if (this.state.questionNumber > 10) this.context.router.push(`/completed-quiz/${this.state.numberCorrect}`)
	}
	
	// Reset message to the user:
	clearUserMessage() {
		setTimeout(() => {
			this.setState({ 
				userMessage: 'Choose the correct note'    // resets the message to the user
			}, () => {
				// check to see if the user should be rerouted via toCompletedQuiz function:
				this.toCompletedQuiz(); 
			});
		}, 2000)
	}
	
	checkChoice(option) {
		// if user chooses correctly:
		if (option === this.state.correct) {
			this.setState({
				userMessage:    'Correct!',	  // alert the user that they chose correctly
				correct:  			notes[Math.floor(Math.random() * notes.length)].note, // assign new correct note
				numberCorrect:  this.state.firstTry ? this.state.numberCorrect + 1 : this.state.numberCorrect,
				firstTry:       true,         // reset firstTry for the next question so the user can gain points
				questionNumber: this.state.questionNumber + 1, 
				notesEnter:     false,        // reset the QuizOptions notesEnter animation
				incorrectNotes: false         // remove any previous QuizOptions incorrectNotes animation
			}, () => {
						this.pushChoices();       // create new note choices for the next question
						this.setState({ 
							notesEnter: true, 	    // trigger rendering of QuizOptions notesEnter animation
						}) 
					} 
				)
			this.clearUserMessage();        // reset the user message to 'Choose the correct note:' after 2 sec
		} else { 
			// If user chooses incorrectly:
			this.setState({ 
				userMessage:    'Try again!', // alert the user that they chose incorrectly
				firstTry:       false,        // prevent user from earning points after choosing incorrectly
				notesEnter:     false,        // remove QuizOptions notesEnter animation
				incorrectNotes: false         // reset QuizOptions incorrectNotes animation if multiple incorrect choices
			}, () => {
				this.clearUserMessage();      // reset the user message to 'Choose the correct note:'
				this.setState({ incorrectNotes: true }) // trigger rendering of QuizOptions incorrectNotes animation
			})
		}
	}
	
  render() {   
    return (
			<div className={'outer-wrapper'}>
				<QuizProgress questionNumber={this.state.questionNumber} />
				<ToneGenerator note={this.state.correct} />
				<UserMessage userMessage={this.state.userMessage} incorrectNotes={this.state.incorrectNotes} notesEnter={this.state.notesEnter} />
				<QuizOptions incorrectNotes={this.state.incorrectNotes} notesEnter={this.state.notesEnter} choices={this.state.choices} checkChoice={this.checkChoice.bind(this)} questionNumber={this.state.questionNumber} />
			</div>
    );
  }
}

export default Quiz;