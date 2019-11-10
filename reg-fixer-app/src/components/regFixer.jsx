import React, { Component } from "react";
import _ from "lodash";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputCard from "./inputCard";
import ExpressionCard from "./expressionCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { blue, green, yellow, red } from "@material-ui/core/colors";
import axios from "axios";

//const API_URL = "https://jsonplaceholder.typicode.com/users"; //"http://localhost:8080/greeting"
let API_URL = "http://localhost:3001";

class RegFixer extends Component {
  state = {
    positiveExamples: "",
    negativeExamples: "",
    regex: "",
    isFixed: false,
    isWaiting: false
  };

  handleFix = async () => {
    // this.setState({ isWaiting: true }, async () => {
    //   const response = await axios.post(API_URL, {
    //     positiveExamples: this.state.positiveExamples.split("\n"),
    //     negativeExamples: this.state.negativeExamples.split("\n"),
    //     regex: this.state.regex
    //   });

    //   this.setState({
    //     isWaiting: false,
    //     regex: response.data.regex
    //   });
    // });

    axios.post("http://localhost:3001").then(resp => {
      console.log("data: ", resp);
      this.setState({
        isWaiting: false,
        regex: resp.data
      });
    });

    // this.setState({ isWaiting: true });
    // axios.defaults.headers.post["Content-Type"] =
    //   "application/x-www-form-urlencoded";
    // axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    // const response = await axios.post(API_URL, {
    //   // positiveExamples: this.state.positiveExamples.split("\n"),
    //   // negativeExamples: this.state.negativeExamples.split("\n"),
    //   regex: this.state.regex
    // });
    // this.setState({
    //   isWaiting: false,
    //   regex: response.data.regex
    // });
  };

  // handleFix = () => {
  //   this.setState({ isWaiting: true });
  //   this.wait();
  // };

  // wait = async () => {
  //   await this.sleep(500);
  //   this.callBackend();
  //   this.setState({ isWaiting: false, isFixed: true });
  // };

  // sleep = milliseconds => {
  //   return new Promise(resolve => setTimeout(resolve, milliseconds));
  // };

  // TODO: call to back end
  // callBackend = () => {
  //   let i;
  //   let j;
  //   let n = 0;
  //   for (i = 0; i < 100000; i++) {
  //     for (j = 0; j < 100000; j++) {
  //       n++;
  //       n--;
  //     }
  //   }
  // };

  handlePositiveChange = positiveExamples => {
    // TODO: update dynamic matching
    // this.setState({ positiveExamples: positiveExamples.split(';') });
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
              color={green}
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
              color={red}
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
            regex={this.state.regex}
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
