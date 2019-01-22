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
      const width = window.prompt("input game board width");
      const height = window.prompt("input game board height");

      this.setState({
        playingGame: true,
        size: [parseInt(width), parseInt(height)]
      });
    }
  }

  render() {
    return (
      <div className="App">
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
