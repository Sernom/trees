import React from 'react'

const InputGroup = (props) => {
  return (
  <div className = 'input-group'>
    <input
      {...props.attributes}
    />
    <button>!!!</button>
  </div>
  )
}

export default InputGroup
