import React, { Component }  from 'react';
import { Link } from 'react-router';
 
const style = {
	button: {
		background: '#eeaa7b',
		fontFamily: '"Roboto Mono", monospace',
		borderRadius: '15px',
		fontSize: '1.25em',
		color: '#fff',
		width: '100%',
		height: '50px',
		padding: '5px 20px',
		cursor: 'pointer',
		':hover': {
			backgroundColor: '#08f'
		}
	},
	link: {
		width: '100%',
		margin: '0 auto'
	}
}

class StartButton extends Component {
	
	render() {
		return(
				<Link 
					to='/taking-quiz'
					style={style.link}
				>
					<button 
						style={style.button}
					>
						{this.props.startPhrase}
					</button>
				</Link>
		)
	}
}
	

export default StartButton;