import React, { Component } from "react";
import _ from "lodash";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ExamplesInput from "./examplesInput";
import ExpressionInput from "./expressionInput";

class RegFixer extends Component {
  state = {
    positiveExamples: [],
    negativeExamples: [],
    regex: "",
    isFixed: false,
    isWaiting: false
  };

  positiveExamplesRef = React.createRef();
  negativeExamplesRef = React.createRef();
  expressionRef = React.createRef();

  handleFix = () => {
    const positiveExamples = this.positiveExamplesRef.current.value;
    const negativeExamples = this.negativeExamplesRef.current.value;
    const regex = this.expressionRef.current.value;
    this.setState({ positiveExamples, negativeExamples, regex });
    //this.setState({ regex });
  };

  render() {
    const { positiveExamples, negtiveExamples } = this.state;
    return (
      <div>
        <div
          className="row"
          style={{
            marginTop: 40,
            marginBottom: 20
          }}
        >
          <div className="col-6">
            <TextareaAutosize
              style={{
                width: 550
              }}
              ref={this.positiveExamplesRef}
              aria-label={"positive"}
              placeholder={"Positive Examples"}
            />
          </div>
          <div className="col-6">
            <TextareaAutosize
              style={{
                width: 550
              }}
              ref={this.negativeExamplesRef}
              aria-label={"negative"}
              placeholder={"Negative Examples"}
            />
          </div>
        </div>
        <div
          style={{
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 15,
            marginRight: 15
          }}
          className="form"
        >
          <input
            style={{
              width: 700
            }}
            id={"newExpression"}
            ref={this.expressionRef}
            type="text"
            name={"newExpression"}
            placeholder={"New Expression"}
          />
        </div>
        <button className="btn btn-primary" onClick={this.handleFix}>
          Fix it!
        </button>
      </div>
    );
  }
}

export default RegFixer;
