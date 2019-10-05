import React, { Component } from "react";
import _ from "lodash";
import ExampleTable from "./exampleTable";
import ExampleForms from "./exampleForms";
import RegexForm from "./regexForm";
import RegexDisplay from "./regexDisplay";

class RegFixer extends Component {
  state = {
    positiveExamples: [],
    negtiveExamples: [],
    regex: "",
    isSaved: false
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

  handleAddExpression = expression => {
    const regex = expression;
    const isSaved = true;
    this.setState({ regex, isSaved });
  };

  handleEdit = () => {
    const isSaved = false;
    this.setState({ isSaved });
  };

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
        <ExampleForms
          positiveExamples={positiveExamples}
          negtiveExamples={negtiveExamples}
          onAddPositive={this.handleAddPositive}
          onAddNegtive={this.handleAddNegtive}
        />
        <div
          style={{
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 15,
            marginRight: 15
          }}
        >
          {this.state.isSaved ? (
            <RegexDisplay regex={this.state.regex} onEdit={this.handleEdit} />
          ) : (
            <RegexForm
              regex={this.state.regex}
              onAdd={this.handleAddExpression}
            />
          )}
        </div>
        <form>
          <button className="btn btn-primary btn-lg">Fix it!</button>
        </form>
      </div>
    );
  }
}

export default RegFixer;
