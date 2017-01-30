import React, { Component }  from 'react';
import { Song, Sequencer, Synth } from 'react-music';


export default class ToneTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: true,
      lightMode: true
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
      <div style={this.state.lightMode ? {
        paddingTop: '30px'
      } : {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        paddingTop: '30px'
      }}>
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
                  [0, 8, 'c4'],
                  [8, 4, 'c4'],
                  [12, 4, 'd#4'],
                  [16, 8, 'f4'],
                  [24, 8, 'f4'],
                ]}
              />
            </Sequencer>
        </Song>

        <div style={{ textAlign: 'center' }}>
          <label className="switch">
            <div className="slider round"></div>
          </label>
        </div>

        <button
          className="react-music-button"
          type="button"
          onClick={this.handlePlayToggle}
        >
          {this.state.playing ? 'Stop' : 'Play'}
        </button>
      </div>
    );
  }
}