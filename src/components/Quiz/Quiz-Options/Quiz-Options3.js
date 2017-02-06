import React, {Component} from 'react';
import { StaggeredMotion, spring } from 'react-motion';

// notesEnter animation:
const startY = 50;
const startOpacityY = .5;
const initialStiffnessY = 800;
const initialDampingY = 60;
const finalStiffnessY = 800;
const finalDampingY = 60;

// incorrectNotes animation:
const startX = -10;
const startOpacityX = 1;
const initialStiffnessX = 700;
const initialDampingX = 25;
const finalStiffnessX = 700;
const finalDampingX = 25;

class QuizOptions3 extends Component {
	
  render() {
		const choices      = this.props.choices.sort()
		let notesEnter     = null;
		let incorrectNotes = null;
		
		if (this.props.notesEnter) {
			notesEnter = 
				<StaggeredMotion
					defaultStyles={[
						{y: startY, o: startOpacityY},
						{y: startY, o: startOpacityY},
						{y: startY, o: startOpacityY},
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
							<div className={'inner-wrapper notes'}>
								{interpolatingStyles.map((style, i) => {
									const notesEnterStyles = {
										width: '4rem',
										height: '4rem',
//										background: 'linear-gradient(to right, #d69480, #d84315',
										background: '#eeaa7b',
										fontFamily: '"Roboto Mono", monospace',
										borderRadius: '50%',
										WebkitTransform: `translate3d(0, ${style.y}px, 0)`,
										opacity: style.o,
										cursor: 'pointer',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										color: 'white',
										fontSize: '1.25em'
									}
									return <button style={notesEnterStyles} 
															key={i}
															ref={choices[i]} 
															onClick={this.props.checkChoice.bind(this, choices[i])}
												 >
													{choices[i].slice(0,1).toUpperCase()}
												 </button>;
								})}
							</div>
						}
				</StaggeredMotion>
		} else {
				notesEnter = null
		}

		if (this.props.incorrectNotes) {
			incorrectNotes =
				<StaggeredMotion
					defaultStyles={[
						{x: startX, o: startOpacityX},
						{x: startX, o: startOpacityX},
						{x: startX, o: startOpacityX},
						{x: startX, o: startOpacityX}
					]}
					styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
						return i === 0
							? { 
									x: spring(0, { stiffness: initialStiffnessX, damping: initialDampingX }), 
									o: spring(1)
								}
							: {
									x: spring(prevInterpolatedStyles[i - 1].x, { stiffness: finalStiffnessX, damping: finalDampingX }),
									o: spring(prevInterpolatedStyles[i - 1].o)
								} 
					})}>
						{interpolatingStyles =>
							<div className={'inner-wrapper notes'}>
								{interpolatingStyles.map((style, i) => {
									const incorrectNotesStyles = {
										width: '4rem',
										height: '4rem',
//												background: 'linear-gradient(to right, #d69480, #d84315',
										background: '#eeaa7b',
										fontFamily: '"Roboto Mono", monospace',
										borderRadius: '50%',
										WebkitTransform: `translate3d(${style.x}px, 0, 0)`,
										opacity: style.o,
										cursor: 'pointer',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										color: 'white',
										fontSize: '1.25em'
									}
									return <button style={incorrectNotesStyles} 
															key={i}
															ref={choices[i]} 
															onClick={this.props.checkChoice.bind(this, choices[i])}
												 >
													{choices[i].slice(0,1).toUpperCase()}
												 </button>;
								})}
							</div>
						}
				</StaggeredMotion>
		} else {
			incorrectNotes = null;
		}
		
    return (
			<div className={'inner-wrapper'}>
				{notesEnter}
				{incorrectNotes}
			</div>
    );
  }
}

export default QuizOptions3;