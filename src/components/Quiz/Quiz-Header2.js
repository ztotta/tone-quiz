import React, {Component} from 'react';

class QuizHeader2 extends Component {
	
  render() {
    return (
			<div className={'inner-wrapper alert'}>
				<h2 className={'alert-message'}>{this.props.alert}</h2>
			</div>
    );
  }
}

export default QuizHeader2;