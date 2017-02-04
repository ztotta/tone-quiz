import React, {Component} from 'react';
import { StyleRoot } from 'radium';
import { Grid, Cell } from 'radium-grid';

const styles = {
	cell: {
    boxSizing: "border-box",
    color: "#045fb4",
		textAlign: 'center',
    padding: "1rem",
    height: "100%",
		width: '100%',
		margin: '0 auto',
		alignItems: 'center !important'
	},
	grid: {
		height: '100%',
		width: '100%'
	},
	h1: {
		color: 'white'
	}
}

class Header extends Component {
  render() {
    return (
				<StyleRoot className="App-header">
					<Grid style={styles.grid}
						verticalAlign='middle'
						width='1'
					>
						<Cell
							verticalAlign='middle'
							align='center'
							width='1'
						>
							<h1 style={styles.h1}>Tone Quiz</h1>
						</Cell>
					</Grid>
				</StyleRoot>
    );
  }
}

export default Header;