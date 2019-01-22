import React from "react";
import { Row } from "./Row";

export class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerLoc: undefined,
      spriteLocs: undefined,
      totalMoves: 0
    };

    this.hanldeArrowPress = this.hanldeArrowPress.bind(this);
  }

  setupNewGame() {
    const width = this.props.size[0];
    const height = this.props.size[1];

    let startingLoc = [
      Math.floor(Math.random() * width),
      Math.floor(Math.random() * height)
    ];

    let spriteSet = new Set();
    for (let i = 0; i < this.props.size[0]; i++) {
      const spriteRow = Math.floor(Math.random() * this.props.size[0]);
      const spriteCol = Math.floor(Math.random() * this.props.size[0]);
      const spriteLoc = `${spriteRow},${spriteCol}`; //needs to be string to add to set and check values
      if (
        spriteSet.has(spriteLoc) ||
        (spriteRow === startingLoc[0] && spriteCol === startingLoc[1])
      ) {
        i--;
      } else {
        spriteSet.add(spriteLoc);
      }
    }
    let spriteLocs = [...spriteSet];
    let spriteLocsArr = spriteLocs.map(element => {
      element = element.split(",");
      for (let j = 0; j < element.length; j++) {
        element[j] = parseInt(element[j]);
      }
      return element;
    });

    this.setState({ playerLoc: startingLoc, spriteLocs: spriteLocsArr });
  }

  componentDidUpdate() {
    if (
      !this.state.playerLoc &&
      this.props.size[0] !== 0 &&
      this.props.size[1] !== 0
    ) {
      this.setupNewGame();
    } else {
      if (this.state.spriteLocs) {
        let spriteLocs = this.state.spriteLocs;
        let playerLocString = this.state.playerLoc.join(",");
        for (let i = 0; i < spriteLocs.length; i++) {
          if (playerLocString === spriteLocs[i].join(",")) {
            const newLocs = Array.from(this.state.spriteLocs);
            newLocs.splice(i, 1);
            this.setState({ spriteLocs: newLocs });
            console.log("removed sprite!");
          }
        }
      }
    }
  }

  hanldeArrowPress(e) {
    e = e || window.event;
    let loc = this.state.playerLoc;
    let row = loc[0];
    let col = loc[1];
    let tm = this.state.totalMoves;

    if (e.keyCode === 38) {
      // up arrow
      console.log("up!");
      row--;
      if (row <= -1) row = this.props.size[0] - 1;
    } else if (e.keyCode === 40) {
      // down arrow
      console.log("down!");
      row++;
      if (row >= this.props.size[0]) row = 0;
    } else if (e.keyCode === 37) {
      // left arrow
      console.log("left!");
      col--;
      if (col <= -1) col = this.props.size[1] - 1;
    } else if (e.keyCode === 39) {
      // right arrow
      console.log("right!");
      col++;
      if (col >= this.props.size[1]) col = 0;
    }

    this.setState({ playerLoc: [row, col], totalMoves: ++tm });
  }

  render() {
    if (
      this.state.spriteLocs &&
      this.state.spriteLocs.length === 0 &&
      this.props.playingGame
    ) {
      alert(
        `Game over. Total moves to save princess: ${this.state.totalMoves}`
      );
      this.props.handleGameOver();
    }

    const size = this.props.size;
    let cols = [];

    document.onkeydown = this.hanldeArrowPress;

    for (let i = 0; i < size[0]; i++) {
      cols.push(
        <Row
          size={this.props.size}
          index={i}
          playerLoc={this.state.playerLoc}
          spriteLocs={this.state.spriteLocs}
        />
      );
    }

    return <div>{cols}</div>;
  }
}
