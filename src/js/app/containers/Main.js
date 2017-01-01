import React, { Component } from 'react'

//import forms
import FieldLevelValidationForm from '../components/FieldLevelValidationForm'
import SimpleForm from '../components/SimpleForm'
import SubmitValidationForm from '../components/SubmitValidationForm'
import SynchronousValidationForm from '../components/SynchronousValidationForm'

class Main extends Component{

  simpleFormHandleSubmit = function(values){
    console.log("SIMPLE FORM:")
    console.log(values)
  }

  fieldLevelValidationHandleSubmit = function(values){
    console.log("FIELD LEVEL VALIDATION FORM:")
    console.log(values)
  }

  synchronousValidationHandleSubmit = function(values){
    console.log("SYNCHRONOUS VALIDATION FORM:")
    console.log(values)
  }

  submitValidationHandleSubmit = function(values){
    console.log("SUBMIT VALIDATION FORM:")
    console.log(values)
  }

  render(){
    return(
      <div className='appWrapper'>
        <h1>Redux forms</h1>

        <div className='row'>
          <div className='col-sm-5 formArea'>
            <h3>Simple Form</h3>
            <SimpleForm onSubmit={this.simpleFormHandleSubmit.bind(this)}/>
          </div>

          <div className='col-sm-1'>{/*White space*/}</div>

          <div className='col-sm-5 formArea'>
            <h3>Field level validation</h3>
            <FieldLevelValidationForm onSubmit={this.fieldLevelValidationHandleSubmit.bind(this)} />
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-5 formArea'>
            <h3>Synchronous validation</h3>
            <SynchronousValidationForm onSubmit={this.synchronousValidationHandleSubmit.bind(this)}/>
          </div>

          <div className='col-sm-1'>{/*White space*/}</div>

          <div className='col-sm-5 formArea'>
            <h3>Submit Validation</h3>
            <SubmitValidationForm onSubmit={this.submitValidationHandleSubmit.bind(this)}/>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-5 formArea'>
            <h3>Blur validation</h3>
          </div>

          <div className='col-sm-1'>{/*White space*/}</div>

          <div className='col-sm-5 formArea'>
            <h3>Wizard Form</h3>
          </div>
        </div>
      </div>
    )
  }
}

//export component
export default Main
