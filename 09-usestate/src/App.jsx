import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(20);
  const [name, setName] = useState('Boss')
  function changeNum(){
    console.log(num);
    
    setNum(30);
    setName('JK')
  }
  return (
    <div>
      <h1>Value of a is {num} <br/> Value of name is {name}</h1>
      <button onClick={changeNum}>Click Me</button>
    </div>
  )
}

export default App