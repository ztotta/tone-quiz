import React  from 'react';
import Radium from 'radium';

const style = {
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
}

const Button = Radium(({ children }) => (
	<button style={style}>
		{children}
	</button>
))
	

export default Button;