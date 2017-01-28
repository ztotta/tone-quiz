import React, {Component} from 'react';
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
		width: '100%',
		':hover': {
      background: '#777'
    },
		backgroundColor: "white",
		cursor: 'pointer'
  },
	h3: {
		margin: "auto"
	}
}

let options = ['option 1', 'option 2', 'option 3', 'option 4'];

class QuizOptions extends Component {
	
	
  render() {
    return (
			<Grid>
				{options.map(option => {
					return(
						<Cell 
							style={styles.cellHeader}
							verticalAlign="top"
							width="1"
							key={option}
						>
							<h3 style={styles.h3}>{option}</h3>
						</Cell>
					)
				})}
			</Grid>
    );
  }
}

export default QuizOptions;