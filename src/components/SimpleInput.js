import React, { useState } from 'react'

const SimpleInput = () => {
  const [text, setText] = useState("")
  const handleInput = e => setText(e.target.value)
  return (
    <label>Example
      <input placeholder="Write something" value={text} onChange={handleInput} />
    </label>
  )
}

export default SimpleInput
