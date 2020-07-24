import React from 'react'

const InputGroup = (props) => {
  return (
  <div className = 'input-group'>
    <input
      {...props.attributes}
    />
    {props.children}
  </div>
  )
}

export default InputGroup
