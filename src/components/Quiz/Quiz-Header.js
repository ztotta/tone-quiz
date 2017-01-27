import React, {Component} from 'react';
import { Link } from 'react-router';
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
		borderRadius: "5px 5px 0 0",
		backgroundColor: "white",
		width: '100%'
  },
	h3: {
		margin: "auto"
	}
}

class QuizHeader extends Component {
  render() {
    return (
			<Cell 
				style={styles.cellHeader}
				verticalAlign="top"
				width="1"
			>
				<h3 style={styles.h3}><Link to='/'>Choose the correct frequency:</Link></h3>
			</Cell>
    );
  }
}

export default QuizHeader;