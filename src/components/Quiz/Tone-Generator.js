import React, { Component }  from 'react';
import { Song, Sequencer, Synth } from 'react-music';

const styles = {
	button: {
		boxSizing: "border-box",
    color: "white",
		textAlign: 'center',
    margin: 'auto',
    height: "6rem",
		width: '6rem',
		borderRadius: '50%',
		fontFamily: '"Roboto Mono", monospace',
		background: '#eeaa7b',
		cursor: 'pointer',
		fontSize: '1.25em'
	}
}

class ToneGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      lightMode: true,
			note: this.props.note
    };

    this.handlePlayToggle = this.handlePlayToggle.bind(this);
  }
 
  handlePlayToggle() {
    this.setState({
      playing: !this.state.playing,
    }, function() {
			   setTimeout(() => {
					 this.setState({
						 playing: false
					 })
				 }, 1500)
			 });
  }
  
  render() {
    return (
      <div className={'inner-wrapper play-button'}>
        <Song
          playing={this.state.playing}
          tempo={90}
        >
            <Sequencer
              resolution={16}
              bars={2}
            >
              <Synth
                type="sine"
                steps={[
                  [0, 8, this.props.note ]
                ]}
              />
            </Sequencer>
        </Song>

        <button
          className="react-music-button"
          type="button"
          onClick={this.handlePlayToggle}
          style={styles.button}
        >
          {this.state.playing ? 'STOP' : 'PLAY'}
        </button>
      </div>
    );
  }
}

export default ToneGenerator;