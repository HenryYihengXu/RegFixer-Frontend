import React, { Component } from "react";
import _ from "lodash";
import Examples from "./examples";
import Menu from "./menu";
import ExampleTable from "./exampleTable";
import ExampleForm from "./exampleForm";

class RegFixer extends Component {
  state = {
    positiveExamples: ["asd", "sdfasd"],
    negtiveExamples: ["sdafsda", "qqq", "sadfs"]
  };

  handleDeletePositive = example => {
    const positiveExamples = this.state.positiveExamples.filter(
      e => e !== example
    );
    this.setState({ positiveExamples });
  };

  handleDeleteNegtive = example => {
    const negtiveExamples = this.state.negtiveExamples.filter(
      e => e !== example
    );
    this.setState({ negtiveExamples });
  };

  render() {
    const { positiveExamples, negtiveExamples } = this.state;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2">
            <Menu />
          </div>
          <div className="col">
            <ExampleTable
              positiveExamples={positiveExamples}
              negtiveExamples={negtiveExamples}
              onDeletePositive={this.handleDeletePositive}
              onDeleteNegtive={this.handleDeleteNegtive}
            />
            <ExampleForm />
          </div>
        </div>

        <h1>Fix It!</h1>
      </React.Fragment>
    );
  }
}

export default RegFixer;
