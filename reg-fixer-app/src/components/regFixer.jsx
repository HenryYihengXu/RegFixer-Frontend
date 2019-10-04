import React, { Component } from "react";
import _ from "lodash";
import Menu from "./menu";
import ExampleTable from "./exampleTable";
import ExampleForm from "./exampleForm";

class RegFixer extends Component {
  state = {
    positiveExamples: [],
    negtiveExamples: []
  };

  handleDeletePositive = example => {
    const positiveExamples = this.state.positiveExamples.filter(
      ex => ex !== example
    );
    this.setState({ positiveExamples });
  };

  handleDeleteNegtive = example => {
    const negtiveExamples = this.state.negtiveExamples.filter(
      ex => ex !== example
    );
    this.setState({ negtiveExamples });
  };

  handleAddPositive = example => {
    const positiveExamples = [...this.state.positiveExamples];
    if (positiveExamples.indexOf(example) >= 0) {
      return;
    }
    positiveExamples.push(example);
    this.setState({ positiveExamples });
  };

  handleAddNegtive = example => {
    const negtiveExamples = [...this.state.negtiveExamples];
    if (negtiveExamples.indexOf(example) >= 0) {
      return;
    }
    negtiveExamples.push(example);
    this.setState({ negtiveExamples });
  };
  handleSortPositive = example => {};

  handleSortNegtive = example => {};

  render() {
    const { positiveExamples, negtiveExamples } = this.state;
    return (
      <div>
        <ExampleTable
          positiveExamples={positiveExamples}
          negtiveExamples={negtiveExamples}
          onDeletePositive={this.handleDeletePositive}
          onDeleteNegtive={this.handleDeleteNegtive}
          onSortPositive={this.handleSortPositive}
          onSortNegtive={this.handleSortNegtive}
        />
        <ExampleForm
          positiveExamples={positiveExamples}
          negtiveExamples={negtiveExamples}
          onAddPositive={this.handleAddPositive}
          onAddNegtive={this.handleAddNegtive}
        />
      </div>
    );
  }
}

export default RegFixer;
