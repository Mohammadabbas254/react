import React from 'react'

const App = () => {
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form submitted")
  }
  return (
    <div>
       <div>
        <form onSubmit={(e)=> {
          submitHandler(e)
          }}>
          <input type="text" placeholder='enter your name'/>
          <button>submit</button>
        </form>
      </div>
    </div>
  )
}

export default App