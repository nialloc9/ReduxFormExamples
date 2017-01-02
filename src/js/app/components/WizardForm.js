import React, { PropTypes, Component } from 'react'

//import pages
import FirstPage from './wizard/FirstPage'
import SecondPage from './wizard/SecondPage'
import ThirdPage from './wizard/ThirdPage'

class WizardForm extends Component{

  //constructor set state and bind methods
  constructor(props){
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  //go forward one page
  nextPage(){
    console.log('YoOYOYOYOYO')
    this.setState({page: this.state.page + 1})
  }

  //go back one page
  previousPage(){
    this.setState({page: this.state.page - 1})
  }

  render(){

    //destructure props
    const { onSubmit } = this.props

    //destructure state
    const { page } = this.state

    return(
      <div>
        {page === 1 && <FirstPage onSubmit={this.nextPage.bind(this)}/>}
        {page === 2 && <SecondPage onSubmit={this.nextPage} previousPage={this.previousPage}/>}
        {page === 3 && <ThirdPage onSubmit={onSubmit} previousPage={this.previousPage}/>}
      </div>
    )
  }
}

WizardForm.proptypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm
