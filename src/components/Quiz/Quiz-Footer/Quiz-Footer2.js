import React, {Component} from 'react';

const styles = {
	cellHeader: {
    boxSizing: "border-box",
    color: "#045fb4",
		textAlign: 'center',
    marginBottom: "0.2rem",
    padding: "1rem",
    height: "10%",
		border: "1px solid #045fb4",
		borderRadius: "0 0 5px 5px",
		backgroundColor: "white",
		width: '100%',
		display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
	h3: {
		margin: "auto"
	}
}

class QuizFooter extends Component {
	
  render() {
    return (
			<div className={'inner-wrapper progress'}>
				<h1 style={styles.h3}>{this.props.questionNumber}/10</h1>
			</div>
    );
  }
}

export default QuizFooter;