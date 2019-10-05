import React, { Component } from 'react';
import AddExampleForm from "./addExampleForm";

const ExampleForms = props => {
  return (
    <div className="row">
      <div className="col-6">
        <AddExampleForm
          label="Positive"
          examples={props.positiveExamples}
          onAdd={props.onAddPositive}
        />
      </div>
      <div className="col-6">
        <AddExampleForm
          label="Negtive"
          examples={props.negtiveExamples}
          onAdd={props.onAddNegtive}
        />
      </div>
    </div>
  );
};

export default ExampleForms;
