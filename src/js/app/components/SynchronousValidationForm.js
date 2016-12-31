import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
class SynchronousValidationForm extends Component{

  render(){

    //destructure props inc decorator props
    const { handleSubmit, pristine, submitting, reset } = this.props

    return(
      <form onSubmit={handleSubmit}>
        <div>
          <Field label='First Name' name='firstName' type='text' component={renderField} customClass='form-control'/>
        </div>

        <div>
          <Field label='Email' name='email' type='email' component={renderField} customClass='form-control'/>
        </div>

        <div>
          <Field label='Age' name='age' type='number' component={renderField} customClass='form-control'/>
        </div>

        <div>
          <button className='btn btn-primary' type='submit'>Submit</button>
          <button className='btn btn-default' type='button' onClick={reset}>Reset</button>
        </div>
      </form>
    )
  }

}

//custom component
const renderField = ({ input, type, label, customClass, meta: { touched, error, warning } })=>(
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} className={customClass} placeholder={label}/>
      {touched && ((error && <span className='infoDanger'>{error}</span>) || (warning && <span className='infoWarning'>{warning}</span>))}
    </div>
  </div>
)

//errors
const validate = values => {
  const errors = {}

  if(!values.firstName){
    errors.firstName = 'Required!'
  }

  if(values.firstName == 'redux'){
    errors.firstName = 'Really? Your name is redux?'
  }

  if(!values.email){
    errors.email = 'Required!'
  }

  if(values.age < 18){
    errors.age = 'Sorry you must be 18 or over.'
  }

  return errors
}

//warnings
const warn = values => {

  const warnings = {}

  if(/^\d+$/.test(values.firstName)){
    warnings.firstName = 'Your name should not be just a number.'
  }

  return warnings
}

export default reduxForm({
  form: 'synchronousValidation',
  validate,
  warn
})(SynchronousValidationForm)
