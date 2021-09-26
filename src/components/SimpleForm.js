import React, { useState } from 'react'

const SimpleForm = () => {
  const [formData, setFormData] = useState({ username: "", pwd: "" })

  const handleInput = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    //DO SOMETHING ELSE
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Username
        <input value={formData.username} name="username" onChange={handleInput}></input>
      </label>
      <label>
        Password
        <input type="password" value={formData.pwd} name="pwd" onChange={handleInput}></input>
      </label>
      <button>Submit</button>
    </form>
  )
}

export default SimpleForm
