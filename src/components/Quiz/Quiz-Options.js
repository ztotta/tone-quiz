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
      backgroundColor: '#777'
    },
		backgroundColor: "white",
		cursor: 'pointer'
  },
	h3: {
		margin: "auto"
	}
}

class QuizOptions extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			choices: [],
			correct: this.props.note,
			notes:   this.props.notes
		};
	}

	componentWillMount() {
		var noteList = this.state.notes.filter(el => el.note !== this.state.correct)
		
		this.state.choices.push(noteList[Math.floor(Math.random() * noteList.length)].note);
			this.state.choices.push(noteList[Math.floor(Math.random() * noteList.length)].note);
			this.state.choices.push(noteList[Math.floor(Math.random() * noteList.length)].note);
		this.state.choices.push(this.state.correct);
	}
	
	checkChoice(option) {
		console.log(option, "option!!")
	}
	
  render() {
    return (
			<Grid>
				{this.state.choices.map(option => {
					return(
						<Cell 
							style={styles.cellHeader}
							verticalAlign="top"
							width="1"
							key={option}
						>
							<button onClick={this.checkChoice.bind(this, option)} style={styles.h3}>{option}</button>
						</Cell>
					)
				})}
			</Grid>
    );
  }
}

export default QuizOptions;