import React, { Component } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

class ExamplesInput extends Component {
  state = {};
  render() {
    return (
      <TextareaAutosize
        style={{
          width: 550
        }}
        aria-label={this.props.label}
        placeholder={this.props.label + " Examples"}
      />
    );
  }
}

export default ExamplesInput;
