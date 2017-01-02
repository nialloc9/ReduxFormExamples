import React from 'react'

//custom input
const renderField =({ label, type, customClass, input, meta: { touched, warning, asyncValidate, error } } = this.props)=>{
  return(
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} className={customClass} />
        {touched && ((error && <span className='infoDanger'>{error}</span>) || (warning && <span className='infoWarning'>{warning}</span>))}
      </div>
    </div>
  )
}

export default renderField
