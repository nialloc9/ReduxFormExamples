import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { submit } from './validate'

import renderField from './renderField'
const ThirdPage = (props) =>{

  //destructure props
  const { handleSubmit, pristine, submitting, previousPage } = props

  return(
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Field name='firstName' type='text' label='First Name' label='First Name' component={renderField} customClass='form-control'/>
      </div>

      <div>
        <Field name='lastName' type='text' label='Last Name' label='Last Name' component={renderField} customClass='form-control'/>
      </div>

      <button type='button' className='btn btn-default' onClick={previousPage}>Previous</button>
      <button type='submit' className='btn btn-primary' disabled={pristine || submitting}>Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'WizardForm',
  destroyOnUnmount: false, //keep data on unmount
  forceUnregisterOnUnmount: true //unregister fields on unmount
})(ThirdPage)
