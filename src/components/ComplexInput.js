import React, { useState } from 'react'

const ComplexInput = ({ description, initialValue, callBack }) => {
  const [text, setText] = useState(initialValue)

  const handleInput = e => {
    setText(e.target.value)
    callBack(text)
  }

  return (
    <label>{description}
      <input placeholder="Write something" value={text} onChange={handleInput} />
    </label>
  )
}

export default ComplexInput
