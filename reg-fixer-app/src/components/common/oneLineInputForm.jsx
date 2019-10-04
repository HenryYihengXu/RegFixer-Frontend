import React, { Component } from "react";
import Joi from "joi-browser";

class oneLineInputForm extends Component {
  newExample = React.createRef();
  state = {
    data: {},
    errors: {}
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

  handleAdd = example => {
    let errors = this.validate();
    this.setState({ errors: errors || {} });
    this.setState({ data: { newExample: "" } });
    if (errors) return;
    if (this.props.examples.indexOf(example) >= 0) {
      errors = { newExample: "This example already exists." };
      this.setState({errors});
      return;
    }
    this.doSubmit(example);
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderInput(name, label) {
    const { data, errors } = this.state;
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}> */}
        <div className="form-row align-items-center">
          <div className="col-10 my-1">
            <input
              id={name}
              ref={this.newExample}
              type="text"
              name={name}
              className="form-control"
              id="inlineFormInputName"
              placeholder={label}
              value={data[name]}
              label={label}
              onChange={this.handleChange}
              error={errors[name]}
            />
            {errors[name] && (
          <div className="alert alert-danger">{errors[name]}</div>
        )}
          </div>
          <div className="col-auto my-1">
            <button
              onClick={() => this.handleAdd(this.newExample.current.value)}
              disabled={this.validate()}
              type="submit"
              className="btn btn-primary sm"
            >
              +
            </button>
          </div>
        </div>
        
      </div>
      //</form>
    );
  }
}

export default oneLineInputForm;
