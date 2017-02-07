import React, {Component} from 'react';

class QuizProgress extends Component {
	
  render() {
    return (
			<div className={'inner-wrapper progress'}>
				<h1 style={{margin: 'auto'}}>
					{this.props.questionNumber <= 10 ? this.props.questionNumber : 10} /10
				</h1>
			</div>
    );
  }
}

export default QuizProgress;