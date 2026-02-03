import React from 'react'

const App = () => {
  let a = 20;
  function chnageA(){
    console.log(a);
    a++;
    console.log(a);
  }
  return (
    <div>
      <h1>Value is {a}</h1>
      <button onClick={chnageA}>Click Me</button>
    </div>
  )
}

export default App