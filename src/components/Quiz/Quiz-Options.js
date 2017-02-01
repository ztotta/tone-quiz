import React, {Component} from 'react';
var RadiumGrid = require('radium-grid');
const { Cell, Grid } = RadiumGrid;

const styles = {
	button: {
		 boxSizing: "border-box",
    color: "#045fb4",
		textAlign: 'center',
    margin: 'auto',
    padding: "1rem",
    height: "100%",
		width: '100%',
		backgroundColor: "white",
		cursor: 'pointer',
		':hover': {
			backgroundColor: "#777"
		}
	},
	cellHeader: {
    boxSizing: "border-box",
    color: "#045fb4",
		textAlign: 'center',
    marginBottom: "0.2rem",
    height: "auto",
		width: '100%',
		backgroundColor: "white",
		cursor: 'pointer',
  },
	h3: {
		margin: "auto"
	}
}

class QuizOptions extends Component {
  render() {
    return (
			<Grid>
				{this.props.choices.sort().map(option => {
					return(
						<Cell 
							style={styles.cellHeader}
							verticalAlign="top"
							width="1"
							key={option + Math.random()}
						>
							<button 
								onClick={this.props.checkChoice.bind(this, option)} 
								style={styles.button}
							>
								{option}
							</button>
						</Cell>
					)
				})}
			</Grid>
    );
  }
}

export default QuizOptions;