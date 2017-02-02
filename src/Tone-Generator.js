import React, { Component }  from 'react';
import { Song, Sequencer, Synth } from 'react-music';

const styles = {
	button: {
		display: 'flex',
		boxSizing: "border-box",
    color: "#045fb4",
		textAlign: 'center',
    margin: 'auto',
    padding: "1rem",
    height: "auto",
		width: '100px',
		borderRadius: '5px',
		backgroundColor: "white",
		cursor: 'pointer',
		':hover': {
			backgroundColor: "#777"
		}
	},
	div: {
		marginBottom: '5px',
		height: 'auto'
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
    });
  }
  
  render() {
    return (
      <div style={styles.div}>
       
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
                  [0, 8, this.state.note ],
                  [8, 8, this.state.note ]
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
          {this.state.playing ? 'Stop' : 'Play Tone'}
        </button>
      </div>
    );
  }
}

export default ToneGenerator;