import React, { Component } from "react";

class ExpressionInput extends Component {
  state = {};
  render() {
    return (
      <input
        style={{
          width: 700
        }}
        id={"newExpression"}
        ref={this.ref}
        type="text"
        name={"newExpression"}
        placeholder={"New Expression"}
      />
    );
  }
}

export default ExpressionInput;
