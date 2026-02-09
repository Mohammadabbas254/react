import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  
  const submitHandler = (e)=>{
    console.log("Form submitted by ",title)
  

    setTitle('')
  }
  return (
    <div>
       <div>
        <form onSubmit={(e)=> {
          submitHandler(e)
          }}>
          <input 
          type="text" 
          placeholder='enter your name'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
            
          }}
          />
          <button>submit</button>
        </form>
      </div>
    </div>
  )
}

export default App