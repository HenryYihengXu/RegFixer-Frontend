import React, { Component } from "react";
import Joi from "joi-browser";

class AddExampleForm extends Component {
  ref = React.createRef();

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

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors, name: input.name, value: input.value });
  };

  renderInput(newExample, label) {
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
            id={newExample}
            ref={this.ref}
            type="text"
            name={newExample}
            className="form-control"
            placeholder={label}
            //content={data[name]}
            value={data.newExample}
            label={label}
            onChange={this.handleChange}
            error={errors.newExample}
          />
          {errors.newExample && (
            <div className="alert alert-danger">{errors.newExample}</div>
          )}
        </div>
        <div className="col-auto my-1">
          <button
            onClick={() => this.handleAdd(this.ref.current.value)}
            disabled={this.validate()}
            type="submit"
            className="btn btn-primary sm"
          >
            +
          </button>
        </div>
      </div>
    );
  }

  handleAdd = example => {
    let errors = this.validate();
    this.setState({ errors: errors || {} });
    this.setState({ data: { newExample: "" } });
    if (errors) return;
    if (this.props.examples.indexOf(example) >= 0) {
      errors = { newExample: "This example already exists." };
      this.setState({ errors });
      return;
    }
    this.props.onAdd(example);
  };
  render() {
    return this.renderInput("newExample", "New Example");
  }
}

export default AddExampleForm;
