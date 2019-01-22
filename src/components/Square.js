import React from "react";
import mario from "../images/Paper-Mario-icon.png";
import goomba from "../images/goomba.png";

export class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rowIndex: this.props.rowIndex,
      colIndex: this.props.colIndex,
      isPlayerLoc: false,
      isSpriteLoc: false
    };
  }

  updateSprites(prevProps, prevState) {
    if (prevState && prevState.isPlayerLoc) {
      this.setState({ isPlayerLoc: false });
    }

    if (this.props.playerLoc) {
      const playerRow = this.props.playerLoc[0];
      const playerCol = this.props.playerLoc[1];
      const thisRow = this.props.rowIndex;
      const thisCol = this.props.colIndex;

      if (
        thisRow === playerRow &&
        thisCol === playerCol &&
        this.state.isPlayerLoc !== true //important, prevents continuous re-render
      ) {
        this.setState({ isPlayerLoc: true });
        if (this.state.isSpriteLoc) {
          this.setState({ isSpriteLoc: false });
        }
      }
    }

    if (this.props.spriteLocs) {
      const spriteLocs = this.props.spriteLocs;
      const myLocString = `${this.props.rowIndex},${this.props.colIndex}`;
      for (let i = 0; i < spriteLocs.length; i++) {
        if (
          spriteLocs[i].join(",") === myLocString &&
          this.state.isSpriteLoc !== true
        ) {
          this.setState({ isSpriteLoc: true });
          break;
        }

        if (
          spriteLocs[i].join(",") === myLocString &&
          this.state.isSpriteLoc === true &&
          this.state.isPlayerLoc === true
        ) {
          this.setState({ isSpriteLoc: false });
        }
      }
    }
  }

  componentDidMount(prevProps, prevState) {
    this.updateSprites(prevProps, prevState);
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateSprites(prevProps, prevState);
  }

  render() {
    let bi;
    bi = this.state.isSpriteLoc ? goomba : "";
    bi = this.state.isPlayerLoc ? mario : bi;

    return (
      <div
        style={{
          border: "1px solid grey",
          backgroundColor: "white",
          backgroundImage: `url("${bi}")`,
          backgroundSize: "cover",
          overflow: "hidden",
          width: 40,
          height: 40
        }}
        className={this.activeClass}
      />
    );
  }
}
