import React, {Component} from 'react';

class QuizHeader2 extends Component {
	
  render() {
    return (
			<div className={'inner-wrapper alert'}>
				<h3 style={{margin: '0 auto', minWidth: '230px'}}>{this.props.alert}</h3>
			</div>
    );
  }
}

export default QuizHeader2;