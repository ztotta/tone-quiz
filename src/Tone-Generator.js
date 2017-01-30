import React, { Component }  from 'react';
import { Song, Sequencer, Synth } from 'react-music';


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
      <div style={{ paddingTop: '10px' }}>
       
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
                  [8, 8, this.state.note ],
                  [12, 8, this.state.note ],
                  [16, 8, this.state.note ]
                ]}
              />
            </Sequencer>
        </Song>

        <button
          className="react-music-button"
          type="button"
          onClick={this.handlePlayToggle}
        >
          {this.state.playing ? 'Stop' : 'Play Tone'}
        </button>
      </div>
    );
  }
}

export default ToneGenerator;