import React, { Component } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'


//timeout promise
const sleep = milliSec => new Promise(resolve => setTimeout(resolve, milliSec))

//simulate server lag
const asyncValidate  = (values)=>{
  return sleep(2000).then(()=>{
    if(['firstname', 'redux'].includes(values.firstname)){
      throw {firstname: 'Hey man whats your real name?'}
    }
  })
}

//submission validation.. check if email is .email
const submit = (values)=>{
    if(/.+@email\.com/.test(values.email)){
      throw new SubmissionError({email: 'Error on submission: email cannot be email.', _error: 'Registration failed'})
    }
}

//custom validation
const validate = values=>{
  const errors = {}

  if(!values.firstname){
    errors.firstname = 'First Name required'
  }

  if(!values.email){
    errors.email = 'Email required'
  }

  return errors
}

//custom input
const renderField = ({ label, type, input, customClass, meta: { asyncValidating, touched, error, warning } }) =>{
  return(
    <div>
      <label>{label}</label>
      <div className={asyncValidating ? 'async-validating' : ''}>
        <input {...input} type={type} className={customClass} placeholder={label} />
        {touched && ((error && <span className='infoDanger'>{error}</span>) || (warning && <span className='infoWarning'>{warning}</span>))}
      </div>
    </div>
  )
}

class AsyncBlurValidationForm extends Component{
  render(){

    //destructure props inc props from reduxForm decorator
    const { handleSubmit, pristine, submitting, reset } = this.props

    return(
      <form onSubmit={handleSubmit(submit)}>

        <div>
          <Field customClass='form-control' label='First Name' type='text' component={renderField} name='firstname'/>
        </div>

        <div>
          <Field customClass='form-control' label='email' type='email' component={renderField} name='email'/>
        </div>

        <hr />

        <button type='submit' className='btn btn-primary'>Submit</button>
        <button type='button' onClick={reset} className='btn btn-default'>Reset</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'AsyncBlurValidationForm',
  validate,
  asyncValidate,
  asyncBlurFields: ['firstname']
})(AsyncBlurValidationForm)
