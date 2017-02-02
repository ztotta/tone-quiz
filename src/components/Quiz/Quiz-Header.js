import React, {Component} from 'react';
var RadiumGrid = require('radium-grid');
const { Cell } = RadiumGrid;

import ToneGenerator from '../../Tone-Generator';

const styles = {
	cellHeader: {
    boxSizing: "border-box",
    color: "#045fb4",
		textAlign: 'center',
    marginBottom: "0.2rem",
    padding: "1rem",
    height: "20%",
		border: "1px solid #045fb4",
		borderRadius: "5px 5px 0 0",
		backgroundColor: "white",
		width: '100%'
  },
	h3: {
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
				<h3 style={{margin: '5px 0'}}>Choose the correct frequency:</h3>
				<ToneGenerator note={this.props.note} />
				<h3 style={{margin: '0 auto'}}>{this.props.alert}</h3>
			</Cell>
    );
  }
}

export default QuizHeader;