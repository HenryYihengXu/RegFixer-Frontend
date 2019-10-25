import React, { Component } from "react";
import _ from "lodash";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputCard from "./inputCard";
import ExpressionCard from "./expressionCard";
import CircularProgress from "@material-ui/core/CircularProgress";

class RegFixer extends Component {
  state = {
    positiveExamples: "",
    negativeExamples: "",
    regex: "",
    isFixed: false,
    isWaiting: false
  };

  positiveExamplesRef = React.createRef();
  negativeExamplesRef = React.createRef();
  expressionRef = React.createRef();

  handleFix = () => {
    let isWaiting = true;
    this.setState({ isWaiting });
    // TODO: call to back end
    let i;
    let j;
    let n = 0;
    for (i = 0; i < 100000; i++) {
      for (j = 0; j < 100000; j++) {
        n++;
        n--;
      }
    }
    isWaiting = false;
    const isFixed = true;
    this.setState({ isWaiting, isFixed });
  };

  handlePositiveChange = positiveExamples => {
    // TODO: update dynamic matching
    this.setState({ positiveExamples });
  };

  handleNegativeChange = negativeExamples => {
    // TODO: update dynamic matching
    this.setState({ negativeExamples });
  };

  handleRegexChange = negativeExamples => {
    // TODO: update dynamic matching
    this.setState({ negativeExamples });
  };

  render() {
    if (this.state.isWaiting === true) {
      return (
        <div>
          <CircularProgress style={{
            marginTop: 40
          }} />
        </div>
      );
    }
    return (
      <div>
        <div
          className="row"
          style={{
            marginTop: 40,
            marginBottom: 20
          }}
        >
          <div
            className="col-6 col-centered"
            style={{
              display: "flex",
              //alignItems: "center",
              justifyContent: "center"
            }}
          >
            <InputCard
              name="Positive Examples"
              handleChange={this.handlePositiveChange}
            />
          </div>
          <div
            className="col-6 col-centered"
            style={{
              display: "flex",
              //alignItems: "center",
              justifyContent: "center"
            }}
          >
            <InputCard
              name="Negative Examples"
              handleChange={this.handleNegativeChange}
            />
          </div>
        </div>
        <div
          style={{
            marginTop: 40,
            marginBottom: 20,
            marginLeft: 15,
            marginRight: 15,
            display: "flex",
            //alignItems: "center",
            justifyContent: "center"
          }}
          className="form"
        >
          <ExpressionCard handleChange={this.handleRegexChange} />
        </div>
        <button className="btn btn-primary" onClick={this.handleFix}>
          Fix it!
        </button>
      </div>
    );
  }
}

export default RegFixer;
