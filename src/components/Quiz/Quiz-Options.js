import React, {Component} from 'react';
//import { Link } from 'react-router';
var RadiumGrid = require('radium-grid');
const { Cell, Grid } = RadiumGrid;
//import { Spring } from 'react-motion';

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
	grid: {
		height: '70%',
		width: '100%'
	},
	h3: {
		margin: "auto"
	}
}

class QuizOptions extends Component {
  render() {
		
//		var Linx = this.props.questionNumber === 2 ? <Link to='/completed-quiz'></Link> : <Link></Link>
		
    return (
			<Grid style={styles.grid}>
					{this.props.choices.length ? (
						this.props.choices.sort().map(option => {
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
							)})
						) : (
							<Cell 
								style={styles.cellHeader}
								verticalAlign="top"
								width="1"
							>
								<button 
									style={styles.button}
								>
									Hello
								</button>
							</Cell>
					)}
			</Grid>
    );
  }
}

export default QuizOptions;