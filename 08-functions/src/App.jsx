import React from 'react'

const App = () => {

  function btnClicked(){
    console.log("button clicked");
  }
  function mouseEnter(){
    console.log("mouse entered");
    
  }
  return (
    <div className='main'>
      <button onMouseEnter={mouseEnter} onClick={btnClicked}>Click me</button>
    
      <button onClick={function(){
        console.log("hello from button");
        
      }}>Another button</button>
    </div>
  )
}

export default App