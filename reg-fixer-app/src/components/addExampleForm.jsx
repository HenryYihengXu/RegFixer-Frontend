import React, { Component } from "react";
import oneLineInputForm from "./common/oneLineInputForm";
import Joi from "joi-browser";

class AddExampleForm extends oneLineInputForm {
  state = {
    data: {
      newExample: ""
    },
    errors: {}
  };
  schema = {
    newExample: Joi.string()
      .required()
      .label("New Example")
  };
  doSubmit = example => {
    console.log(example);
    this.props.onAdd(example);
  };
  render() {
    return this.renderInput("newExample", "New Example");
  }
}

export default AddExampleForm;
