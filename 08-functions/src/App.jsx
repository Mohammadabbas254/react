import React from 'react'

const App = () => {

  function btnClicked(){
    console.log("button clicked");
  }
  function mouseEnter(){
    console.log("mouse entered");
    
  }
  function inputChanging(){
    console.log('User is typing');
    
    }
  return (
    <div className='main'>
      <button onMouseEnter={mouseEnter} onClick={btnClicked}>Click me</button>
    
      <button onClick={function(){
        console.log("hello from button");
        
      }}>Another button</button>

      <input onChange={inputChanging} type='text' placeholder='Enter Name' />
    
      <input 
        onChange={function(elem){
          console.log(elem.target.value);
        }}  
          placeholder='Enter'
        />
    </div>
  )
}

export default App