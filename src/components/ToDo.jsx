
import React, { useState } from 'react'

function ToDo(props) {
  const [title, setTitle] = useState('')
  const textHandler = (el)=>{
    setTitle(el.target.value)
  }

  const addHandler = ()=>{
    const obj = {
      title: title,
      id : Math.random(),
    }
    setTitle("")
    props.onObj(obj)
  }

  return (
    <div>
        <h1>Todo List</h1>
        <input value={title} onChange={textHandler} type="text" />
        <button onClick={addHandler}>ADD</button>
    </div>
  )
}

export default ToDo