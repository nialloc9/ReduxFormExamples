import React, { Component } from 'react'

//import forms
import SimpleForm from '../components/SimpleForm'

class Main extends Component{

  handleSubmit = function(values){
    console.log(values)
  }
  render(){
    return(
      <div className='appWrapper'>
        <h1>Redux forms</h1>

        <div className='row'>
          <div className='col-sm-5 formArea'>
            <h3>Simple Form</h3>
            <SimpleForm onSubmit={this.handleSubmit.bind(this)}/>
          </div>

          <div className='col-sm-1'>{/*White space*/}</div>

          <div className='col-sm-5 formArea'>
            <h3>Field level validation</h3>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-5 formArea'>
            <h3>Synchronous validation</h3>
          </div>

          <div className='col-sm-1'>{/*White space*/}</div>

          <div className='col-sm-5 formArea'>
            <h3>Submit Validation</h3>
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
