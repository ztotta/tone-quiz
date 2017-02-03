import React, { Component }  from 'react';
import { Link } from 'react-router';

const style = {
	button: {
		background: 'linear-gradient(to right, #a9a9a9, #777)',
		border: '3px solid white',
		borderRadius: 4,
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