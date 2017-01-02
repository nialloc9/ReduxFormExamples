import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import renderField from './renderField'

import { asyncValidate, warn } from './validate'

const FirstPage = (props) =>{

  //destructure props
  const { handleSubmit } = props

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <Field name='username' type='text' label='Username' component={renderField} customClass='form-control'/>
      </div>

      <div>
        <Field name='email' type='email' label='Email' component={renderField} customClass='form-control'/>
      </div>

      <div>
        <button type='submit' className='btn btn-primary'>Next</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'WizardForm',
  destroyOnUnmount: false, //preserve form data after unmount
  forceUnregisterOnUnmount: true, //unregister fields on unmount
  warn
})(FirstPage)
