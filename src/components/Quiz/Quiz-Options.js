import React, {Component} from 'react';
import { Link } from 'react-router';
var Radium = require('radium');
var RadiumGrid = require('radium-grid');
const { Cell, Grid } = RadiumGrid;

const styles = {
	cellHeader: {
    boxSizing: "border-box",
    color: "#045fb4",
		textAlign: 'center',
    marginBottom: "0.2rem",
    padding: "1rem",
    height: "auto",
		border: "1px solid #045fb4",
		backgroundColor: "white",
		width: '100%'
  },
	h3: {
		margin: "auto"
	}
}

class QuizOptions extends Component {
  render() {
    return (
			<Grid>
				<Cell 
					style={styles.cellHeader}
					verticalAlign="top"
					width="1"
				>
					<h3 style={styles.h3}><Link to='/'>Option 1:</Link></h3>
				</Cell>
				<Cell 
					style={styles.cellHeader}
					verticalAlign="top"
					width="1"
				>
					<h3 style={styles.h3}><Link to='/'>Option 2:</Link></h3>
				</Cell>
				<Cell 
					style={styles.cellHeader}
					verticalAlign="top"
					width="1"
				>
					<h3 style={styles.h3}><Link to='/'>Option 3:</Link></h3>
				</Cell>
				<Cell 
					style={styles.cellHeader}
					verticalAlign="top"
					width="1"
				>
					<h3 style={styles.h3}><Link to='/'>Option 4:</Link></h3>
				</Cell>
			</Grid>
    );
  }
}

export default QuizOptions;