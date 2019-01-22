import React from "react";
import { Square } from "./Square";

export class Row extends React.Component {
  //only update a row if we need to. improves performance
  shouldComponentUpdate(nextProps, nextState) {
    return (
      !this.props.playerLoc || //game just started and we don't yet have a player location
      nextProps.playerLoc[0] === this.props.index || //the player location will be moving into this row
      this.props.index === this.props.playerLoc[0] //the player location is currently in this row
    );
  }

  render() {
    const size = this.props.size;
    const row = [];
    for (let i = 0; i < size[1]; i++) {
      row.push(
        <Square
          rowIndex={this.props.index}
          colIndex={i}
          playerLoc={this.props.playerLoc}
          spriteLocs={this.props.spriteLocs}
          key={[this.props.index, i].toString()}
        />
      );
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
        className="row"
      >
        {row}
      </div>
    );
  }
}
