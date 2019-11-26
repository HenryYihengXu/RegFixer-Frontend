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

  render() {
    
    return (
      <div>
        <div
          style={{
            marginTop: 40,
            marginBottom: 10,
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
            darkness={800}
            handleChange={this.props.handleRegexChange}
            positiveExamples={this.props.positiveExamples}
            negativeExamples={this.props.negativeExamples}
            value={this.props.regex}
          />
        </div>
        <div
          style={{
            marginTop: 0,
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
            color={blue}
            darkness={500}
            value={this.props.result}
            isWaiting = {this.props.isWaiting}
          />
        </div>
        
        <div
          className="row"
          style={{
            marginTop: 0,
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
              handleChange={this.props.handlePositiveChange}
              examples={this.props.positiveExamples}
              regex={this.props.regex}
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
              handleChange={this.props.handleNegativeChange}
              examples={this.props.negativeExamples}
              regex={this.props.regex}
            />
          </div>
        </div>
        <button className="btn btn-primary" onClick={this.props.handleFix}>
          Fix it!
        </button>
      </div>
    );
  }
}

export default RegFixer;
