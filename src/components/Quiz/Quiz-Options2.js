import React, {Component} from 'react';
import { StaggeredMotion, spring } from 'react-motion';

const startY = 100;
const startOpacity = 0;

const startX = 100;

const initialStiffness = 400;
const initialDamping = 60;

const finalStiffness = 400;
const finalDamping = 60;


class QuizOptions2 extends Component {
	
  render() {
		const choices      = this.props.choices.sort()
		let notes          = null;
		let incorrectNotes = null;
		
		if (this.props.notesEnter) {
			console.log('entered if on animation')
			notes = 
				<StaggeredMotion
					defaultStyles={[
						{y: startY, o: startOpacity},
						{y: startY, o: startOpacity},
						{y: startY, o: startOpacity},
						{y: startY, o: startOpacity}
					]}
					styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
						return i === 0
							? { 
									y: spring(0, { stiffness: initialStiffness, damping: initialDamping }), 
									o: spring(1)
								}
							: {
									y: spring(prevInterpolatedStyles[i - 1].y, { stiffness: finalStiffness, damping: finalDamping }),
									o: spring(prevInterpolatedStyles[i - 1].o)
								} 
					})}>
						{interpolatingStyles =>
							<div className={'inner-wrapper'}>
								{interpolatingStyles.map((style, i) => {
									const ballStyles = {
										width: '4rem',
										height: '4rem',
										background: 'linear-gradient(to right, #d69480, #d84315',
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
									return <button style={ballStyles} 
															key={i}
															ref={choices[i]} 
															onClick={this.props.checkChoice.bind(this, choices[i])}
												 >
													{choices[i].slice(0,1)}
												 </button>;
								})}
							</div>
						}
				</StaggeredMotion>
			} else {
					console.log('entered else on animation')
					notes = null
			}
		
			if (!this.props.notesEnter) {
				incorrectNotes =
						<StaggeredMotion
							defaultStyles={[
								{x: startX, o: startOpacity},
								{x: startX, o: startOpacity},
								{x: startX, o: startOpacity},
								{x: startX, o: startOpacity}
							]}
							styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
								return i === 0
									? { 
											x: spring(0, { stiffness: initialStiffness, damping: initialDamping }), 
											o: spring(1)
										}
									: {
											x: spring(prevInterpolatedStyles[i - 1].x, { stiffness: finalStiffness, damping: finalDamping }),
											o: spring(prevInterpolatedStyles[i - 1].o)
										} 
							})}>
								{interpolatingStyles =>
									<div className={'inner-wrapper'}>
										{interpolatingStyles.map((style, i) => {
											const incorrectChoiceStyles = {
												width: '4rem',
												height: '4rem',
												background: 'linear-gradient(to right, #d69480, #d84315',
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
											return <button style={incorrectChoiceStyles} 
																	key={i}
																	ref={choices[i]} 
																	onClick={this.props.checkChoice.bind(this, choices[i])}
														 >
															{choices[i].slice(0,1)}
														 </button>;
										})}
									</div>
								}
						</StaggeredMotion>
			} else {
				incorrectNotes = null;
			}
		
    return (
			<div>
				{notes}
				{incorrectNotes}
			</div>
    );
  }
}

export default QuizOptions2;