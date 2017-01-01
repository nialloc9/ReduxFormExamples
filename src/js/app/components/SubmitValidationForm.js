import React, { Component } from 'react'

//reduxForm
import { Field, reduxForm, SubmissionError } from 'redux-form'

//submit validation function
const sleep = millSec => new Promise(resolve => setTimeout(resolve, millSec))


const submit = function(values){
  //simulate server latency
  return sleep(2000).then(()=>{
    if(['nialloc9@gmail.com', 'info@ocwebtech.com'].includes(values.email)){
      throw new SubmissionError({email: 'Email already in use', _error: 'Registration Failed!'})
    }
    else if(['userExample', 'customUser'].includes(values.username)){
      throw new SubmissionError({username: 'Username already in use', _error: 'Registration failed'})
    }else{
      window.alert('Registration successful. Email: ' + values.email + ' Username: ' + values.username)
    }
  })
}

//custom component
const renderField = ({input, label, type, customClass, meta:{ touched, error, warning }} = this.props) => {
    return(
      <div>
        <label>{label}</label>
        <div>
          <input {...input} type={type} className={customClass} placeholder={label}/>
          {touched && ((error && <span className='infoDanger'>{error}</span>) || (warning && <span className='infoWarning'>{warning}</span>))}
        </div>
      </div>
    )
}

class SubmitValidationForm extends Component{
  render(){

    //destructure props inc from decorator
    const { handleSubmit, pristine, submitting, reset } = this.props

    return(

      <form onSubmit={handleSubmit(submit)}>
        <div>
          <Field name='username' type='text' component={renderField} label='Username' customClass='form-control'/>
        </div>

        <div>
          <Field name='email' type='email' component={renderField} label='Email' customClass='form-control'/>
        </div>

        <hr />
        <button className='btn btn-primary' type='submit'>Submit</button>
        <button className='btn btn-default' type='button' onClick={reset}>Reset</button>
      </form>

    )
  }
}

export default reduxForm({
  form: 'submitValidation'
})(SubmitValidationForm)
