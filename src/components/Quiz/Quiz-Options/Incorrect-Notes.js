import React, {Component} from 'react';
import { StaggeredMotion, spring } from 'react-motion';

const startX = -10;
const startOpacityX = 1;
const initialStiffnessX = 700;
const initialDampingX = 25;
const finalStiffnessX = 700;
const finalDampingX = 25;

class IncorrectNotes extends Component {
	
  render() {
		const choices      = this.props.choices.sort()
		let incorrectNotes = null;
		
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
			<div className={'inner-wrapper'}>
				{incorrectNotes}
			</div>
    );
  }
}

export default IncorrectNotes;