import React, {Component} from 'react';
import { StaggeredMotion, spring } from 'react-motion';

const startY = 0;
const startOpacityY = .7;
const initialStiffnessY = 400;
const initialDampingY = 60;
const finalStiffnessY = 400;
const finalDampingY = 60;

class UserMessage extends Component {
	
  render() {
		let userMessage = null;
		
		if (this.props.notesEnter || this.props.incorrectNotes) {
			userMessage = 
				<StaggeredMotion
					defaultStyles={[
						{y: startY, o: startOpacityY}
					]}
					styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
						return i === 0
							? { 
									y: spring(0, { stiffness: initialStiffnessY, damping: initialDampingY }), 
									o: spring(1)
								}
							: {
									y: spring(prevInterpolatedStyles[i - 1].y, { stiffness: finalStiffnessY, damping: finalDampingY }),
									o: spring(prevInterpolatedStyles[i - 1].o)
								} 
					})}>
						{interpolatingStyles =>
							<div className={'inner-wrapper'}>
								{interpolatingStyles.map((style, i) => {
									const userMessageStyles = {
										width: '20rem',
										height: '4rem',
										boxShadow: '0px 1px 1px black',
//										background: 'linear-gradient(to right, #d84315, #b8cbce',
										background: '#07889b',
										WebkitTransform: `translate3d(0, ${style.y}px, 0)`,
										borderRadius: '15px',
										opacity: style.o,
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										color: 'white',
										fontSize: '1.25em'
									}
									return <h2 
												  className={'user-message'}
													style={userMessageStyles}
													key={this.props.userMessage}
													>
														{this.props.userMessage}
													</h2>
								})}
							</div>
						}
				</StaggeredMotion>
			} else {
					console.log('entered else on animation')
					userMessage = null
			}
		
    return (
			<div className={'inner-wrapper'}>
				{userMessage}
			</div>
    );
  }
}

export default UserMessage;