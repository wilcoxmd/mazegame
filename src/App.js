import React, { Component } from "react";
import "./App.css";
import { Game } from "./components/Game";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playingGame: false,
      size: [0, 0]
    };
  }

  handleGameOver = () => {
    this.setState({ playingGame: false });
  };

  componentDidMount() {
    if (!this.state.playingGame) {
      const width = window.prompt(
        "Input game board width. \n(A number >= 1. 10 is a good start)"
      );
      const height = window.prompt(
        "Input game board height. \n(A number >= 1. 10 is a good start)"
      );

      this.setState({
        playingGame: true,
        size: [parseInt(width), parseInt(height)]
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="message" style={{ width: 400, marginRight: 50 }}>
          <h1 style={{ fontSize: 24 }}>
            Use the arrow keys to stomp those pesky goombas!
          </h1>
        </div>
        <Game
          size={this.state.size}
          startingLoc={this.state.startingLoc}
          handleGameOver={this.handleGameOver}
          playingGame={this.state.playingGame}
        />
      </div>
    );
  }
}

export default App;
