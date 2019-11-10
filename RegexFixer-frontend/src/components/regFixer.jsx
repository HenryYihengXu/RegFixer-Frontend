import React, { Component } from "react";
import _ from "lodash";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputCard from "./inputCard";
import ExpressionCard from "./expressionCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { blue, green, yellow, red } from "@material-ui/core/colors";
import axios from "axios";
import ResultCard from './resultCard';

const API_URL = "http://localhost:3001";

class RegFixer extends Component {
  state = {
    positiveExamples: "",
    negativeExamples: "",
    regex: "",
    result: "",
    isFixed: false,
    isWaiting: false
  };

  handleFix = async () => {
    // this.setState({ isWaiting: true });
    // axios.post("http://localhost:3001").then(resp => {
    //   console.log("data: ", resp);
    //   this.setState({
    //     isWaiting: false,
    //     regex: resp.data
    //   });
    // });

    this.setState({ isWaiting: true });
    // let pe = this.state.positiveExamples.split("\n");
    // let ne = this.state.negativeExamples.split("\n");
    // pe = pe.filter(e => {e !== ""});
    
    const response = await axios.post(API_URL, {
      positiveExamples: this.state.positiveExamples.split("\n"),
      negativeExamples: this.state.negativeExamples.split("\n"),
      regex: this.state.regex
    });
    let result = response.data[0];
    if(result[0] === "#") {
      result = result.substring(5, result.length - 5);
    }
    console.log(result);
    this.setState({
      isWaiting: false,
      isFixed: true,
      result
    });
  };

  handlePositiveChange = positiveExamples => {
    // TODO: update dynamic matching
    this.setState({ positiveExamples });
  };

  handleNegativeChange = negativeExamples => {
    // TODO: update dynamic matching
    this.setState({ negativeExamples });
  };

  handleRegexChange = regex => {
    // TODO: update dynamic matching
    this.setState({ regex });
  };

  render() {
    if (this.state.isWaiting === true) {
      return (
        <div>
          <CircularProgress
            style={{
              marginTop: 40
            }}
          />
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
              color={blue}
              darkness={500}
              handleChange={this.handlePositiveChange}
              examples={this.state.positiveExamples}
              regex={this.state.regex}
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
              color={blue}
              darkness={500}
              handleChange={this.handleNegativeChange}
              examples={this.state.negativeExamples}
              regex={this.state.regex}
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
          <ExpressionCard
            name="Regex to be fixed"
            color={yellow}
            darkness={700}
            handleChange={this.handleRegexChange}
            positiveExamples={this.state.positiveExamples}
            negativeExamples={this.state.negativeExamples}
            value={this.state.regex}
          />
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
          <ResultCard
            name="Result"
            color={green}
            darkness={500}
            value={this.state.result}
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
