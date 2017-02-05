import React, {Component} from 'react';

import NotesEnter from './Notes-Enter';
import IncorrectNotes from './Incorrect-Notes';

class QuizOptions2 extends Component {
	
  render() {
    return (
			<div className={'inner-wrapper'}>
				<NotesEnter notesEnter={this.props.notesEnter} choices={this.props.choices} checkChoice={this.props.checkChoice} />
				<IncorrectNotes incorrectNotes={this.props.incorrectNotes} choices={this.props.choices} checkChoice={this.props.checkChoice} />
			</div>
    );
  }
}

export default QuizOptions2;