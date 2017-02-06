import React, { Component }  from 'react';
import { Link } from 'react-router';
//import { Motion, spring } from 'react-motion';
 
const style = {
	button: {
		background: '#eeaa7b',
		borderRadius: '15px',
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
		margin: 'o auto'
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