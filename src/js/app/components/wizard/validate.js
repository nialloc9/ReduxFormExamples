import { SubmissionError } from 'redux-form'

//setTimeout promise to simulate server latency
const sleep = milliSec => new Promise(resolve=>{setTimeout(resolve, milliSec)})

//validation
const validate = (values)=>{
  const errors = {}

  if(values.password !== values.passwordAgain){
    errors.passwordAgain = 'Passwords do not match'
  }

  return errors
}

//warn validation
const warn = (values)=>{
  const warnings = {}

  if(/.+@email\.com/.test(values.email)){
    warnings.email = 'Are you sure your email is .email?'
  }

  return warnings
}

//async validation
const asyncValidate = (values)=>{
  return sleep(2000).then(()=>{
    if(values.username == 'user1'){
      throw{username: 'Username is already in use'}
    }

    if(values.email == 'nialloc9@gmail.com'){
      throw{email: 'Email is already in use'}
    }
  })
}

//submission validation
const submit = (values)=>{
  return sleep(1000).then(()=>{
    if(!values.username){
      throw new SubmissionError({username: 'Required', _error: 'Registration Failed'})
    }else if(!values.email){
      throw new SubmissionError({email: 'Required', _error: 'Registration Failed'})
    }else if(!values.password){
      throw new SubmissionError({password: 'Required', _error: 'Registration Failed'})
    }else if(!values.firstName){
      throw new SubmissionError({firstName: 'Required', _error: 'Registration Failed'})
    }else if(!values.lastName){
      throw new SubmissionError({lastName: 'Required', _error: 'Registration Failed'})
    }else{
      alert('Register successful.')
    }
  })
}

export {validate, warn, asyncValidate, submit }
