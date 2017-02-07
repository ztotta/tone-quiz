import React, {Component} from 'react';
var Radium = require('radium');
var RadiumGrid = require('radium-grid');
const { StyleRoot } = Radium; 
const { Grid, Cell } = RadiumGrid;

import StartButton from '../components/Start-Button';

const styles = {
	cell: {
    boxSizing: "border-box",
		textAlign: 'center',
    padding: "1rem",
    height: "auto",
		width: '100%',
		margin: '0 auto',
		alignItems: 'center !important'
	},
	styleRoot: {
		height: '99%',
		width: '100%',
		padding: '5px'
	},
	grid: {
		height: '100%',
		width: '100%'
	},
	h1: {
		color: '#07889b',
		textAlign: 'center'
	}
}

class Welcome extends Component {
  render() {
    return (
			<StyleRoot style={styles.styleRoot}>
				<Grid 
					style={styles.grid}
					width="1"
				>
					<Cell 
						style={styles.cellHeader}
						verticalAlign="middle"
						align="center"
						width="1"
					>
						<h1 style={styles.h1}>INSTRUCTIONS: <hr/> press 'PLAY' and choose the correct note</h1>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
					>
						<StartButton startPhrase={'BEGIN QUIZ'} />
					</Cell>
				</Grid>
			</StyleRoot>
    );
  }
}

export default Welcome;