import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

class SimpleForm extends Component{

  render(){

    //destructure from props inc decorator props
    const { handleSubmit, pristine, reset, submitting } = this.props

    return(
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <div>
              <Field name='firstName' component='input' type='text' placeholder='First Name'/>
            </div>
          </div>

          <div>
            <label htmlFor='lastName'>Last Name</label>
            <div>
              <Field name='lastName' component='input' type='text' placeholder='Last Name'/>
            </div>
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <div>
              <Field name='email' component='input' type='email' placeholder='Email'/>
            </div>
          </div>

          <div>
            <label htmlFor='gender'>Gender</label>
            <div>
              <label><label><Field name='gender' component='input' type='radio' value='male'/> Male</label></label>
              <label><Field name='gender' component='input' type='radio' value='female'/> Female</label>
            </div>
          </div>

          <div>
            <label>Age</label>
            <div>
              <Field name='age' component='select'>
                <option></option>
                <option value='-18'>-18</option>
                <option value='18-25'>18-25</option>
                <option value='25+'>25+</option>
              </Field>
            </div>
          </div>

          <div>
            <label>Comments</label>
            <div>
              <Field name='comments' component='textarea'/>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor='terms'>Terms And Conditions</label>
              <div>
                <Field name='terms' id='terms' component='input' type='checkbox'/>
              </div>
            </div>
          </div>

          <hr />

          <div>
            <button type='submit' disabled={pristine || submitting} className='btn btn-primary'>
              Submit
            </button>
            <button type='button' disabled={pristine || submitting} onClick={reset} className='btn btn-default'>
              Reset
            </button>
          </div>
        </form>
    )
  }
}

export default reduxForm({
  form: 'simple'
})(SimpleForm)
