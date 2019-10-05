import React, { Component } from "react";
import oneLineInputForm from "./common/oneLineInputForm";
import Joi from "joi-browser";

class RegexForm extends oneLineInputForm {
  schema = {
    newExpression: Joi.string()
      .required()
      .label("New Expression")
  };

  ref = React.createRef();
  state = {
    data: {},
    errors: {}
  };

  componentDidMount = () => {
    this.setState({ data: { newExpression: this.props.regex } });
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleAdd = input => {
    let errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.props.onAdd(input);
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors, name: input.name, value: input.value });
  };

  renderInput(newExpression, label) {
    const { data, errors } = this.state;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        className="form-row align-items-center"
      >
        <div className="col-10 my-1">
          <input
            id={newExpression}
            ref={this.ref}
            type="text"
            name={newExpression}
            className="form-control"
            placeholder={"New Regular Expression"}
            value={data.newExpression}
            label={label}
            onChange={this.handleChange}
            error={errors.newExpression}
          />
          {errors.newExpression && (
            <div className="alert alert-danger">{errors.newExpression}</div>
          )}
        </div>
        <div className="col-auto my-1">
          <button
            onClick={() => this.handleAdd(this.ref.current.value)}
            disabled={this.validate()}
            type="submit"
            className="btn btn-primary sm"
          >
            Save
          </button>
        </div>
      </div>
    );
  }
  render() {
    return this.renderInput(
      "newExpression",
      this.props.regex || "New Regular Expression"
    );
  }
}

export default RegexForm;
