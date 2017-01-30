import React, { Component }  from 'react';
import { Link } from 'react-router';

const style = {
	button: {
		backgroundColor: '#777',
		border: 'none',
		borderRadius: 4,
		color: '#fff',
		width: '100%',
		height: '50px',
		padding: '5px 20px',
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
	startQuiz() {
		console.log('starting')
	}
	
	render() {
		return(
			<Link 
				to='/taking-quiz'
				style={style.link}
			>
				<button 
					style={style.button}
					onClick={this.startQuiz.bind(this)}
				>
					Start
				</button>
			</Link>
		)
	}
}
	

export default StartButton;