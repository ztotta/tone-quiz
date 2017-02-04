import React, {Component} from 'react';
import { StaggeredMotion, spring } from 'react-motion';

const startY = 100;
const startOpacity = 0;

const initialStiffness = 400;
const initialDamping = 60;

const finalStiffness = 400;
const finalDamping = 60;

class MotionTest extends Component {
	
  render() {
    return (
			<div className={'outer-wrapper'}>
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
										width: '3rem',
										height: '3rem',
										background: 'linear-gradient(to right, #d0775b, #d84315',
										borderRadius: '50%',
										WebkitTransform: `translate3d(0, ${style.y}px, 0)`,
										opacity: style.o,
										cursor: 'pointer'
									}
									return <div style={ballStyles} key={i} onClick={() => {console.log('clicked')}} />;
								})}
							</div>
						}
				</StaggeredMotion>
			</div>
    );
  }
}

export default MotionTest;