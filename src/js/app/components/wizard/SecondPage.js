import React from 'react'

import { reduxForm, Field } from 'redux-form'

import { validate } from './validate'

import renderField from './renderField'

const SecondPage = (props) =>{

  //destructure props
  const { handleSubmit, previousPage } = props

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <Field name='password' type='password' label='Password' component={renderField} customClass='form-control'/>
      </div>

      <div>
        <Field name='passwordAgain' type='password' label='Password Again' component={renderField} customClass='form-control'/>
      </div>

      <hr />

      <div>
        <button type='button' className='btn btn-default' onClick={previousPage}>Previous</button>
        <button type='submit' className='btn btn-primary'>Next</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'WizardForm',
  destroyOnUnmount: false, //keep data after unmount
  forceUnregisterOnUnmount: true, //unregister fields on unmount,
  validate
})(SecondPage)
