import React, {Component} from 'react';
var RadiumGrid = require('radium-grid');
const { Cell } = RadiumGrid;

const styles = {
	cellHeader: {
    boxSizing: "border-box",
    color: "#045fb4",
		textAlign: 'center',
    marginBottom: "0.2rem",
    padding: "1rem",
    height: "auto",
		border: "1px solid #045fb4",
		borderRadius: "0 0 5px 5px",
		backgroundColor: "white",
		width: '100%'
  },
	h3: {
		margin: "auto"
	}
}

class QuizFooter extends Component {
	
  render() {
    return (
			<Cell 
				style={styles.cellHeader}
				verticalAlign="top"
				width="1"
			>
				<h3 style={styles.h3}>3/10</h3>
			</Cell>
    );
  }
}

export default QuizFooter;