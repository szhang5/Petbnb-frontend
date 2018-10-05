import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../redux/actions';
import { connect } from 'react-redux';

class BlogNew extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  renderFeild(field) {
    const { meta: { touched, error }} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <lable>{field.label}</lable>
        <input 
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
        
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    })
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field 
            label="title"
            name="title"
            component={this.renderFeild}
          />
          <Field 
            label = "categories"
            name="categories"
            component={this.renderFeild}
          />
          <Field 
            label="content"
            name="content"
            component={this.renderFeild}
          />
          <button className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );

  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Required";
  }

  if (!values.categories) {
    errors.categories = "Reauired";
  }

  if (!values.content) {
    errors.content = "Required";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'blogNewForm'
})(
  connect(null, { createPost })(BlogNew)
);
