import React, {Component} from 'react';
var Radium = require('radium');
var RadiumGrid = require('radium-grid');
const { StyleRoot } = Radium; 
const { Grid, Cell } = RadiumGrid;

import Button from '../components/Button';

const styles = {
	cell: {
    boxSizing: "border-box",
    color: "#045fb4",
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
						verticalAlign="center"
						align="center"
						width="1"
					>
						<h1>Welcome</h1>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
					>
						<Button children={'Start'}/>
					</Cell>
				</Grid>
			</StyleRoot>
    );
  }
}

export default Welcome;