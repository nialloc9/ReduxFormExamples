import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'

class FieldLevelValidationForm extends Component{

  render(){

    //destructure from props inc decorator props
    const { handleSubmit, reset, submitting, pristine } = this.props


    //set field validation
    const required = value => value ? undefined : 'Required'
    const redux = value => value && value == 'redux' ? 'Really? Your name is redux?' : undefined

    //set field warning
    const cool = value => value && value == 'cool' ? 'Super Cool' : undefined

    return(
      <form onSubmit={handleSubmit}>
        <div>
          <Field customClass='form-control' name='firstName' type='text' component={renderField} label='First Name' validate={required, redux} warn={cool}/>
        </div>

        <div>
          <Field customClass='form-control' name='email' type='email' component={renderField} label='Email' validate={required}/>
        </div>

        <div>
          <label htmlFor='age'>Age</label>
          <Field className='form-control' name='age' component='select'>
            <option></option>
            <option value='<18'>-18</option>
            <option value='18-25'>18-25</option>
            <option value='25+'>25+</option>
          </Field>
        </div>

        <hr />
        <div>
          <button type='submit' disabled={pristine || submitting} className='btn btn-primary'>Submit</button>
          <button type='button' onClick={reset} disabled={pristine || submitting} className='btn btn-default'>Reset</button>
        </div>
      </form>
    )
  }
}

//create custom component
const renderField = ({ input, label, type, customClass, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className={customClass}{...input} placeholder={label} type={type}/>
      {touched && ((error && <span className='infoDanger'>{error}</span>) || (warning && <span className='infoWarning'>{warning}</span>))}
    </div>
  </div>
)

export default reduxForm({
  form: 'fieldLevelValidation'
})(FieldLevelValidationForm)
