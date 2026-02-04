import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(20);
  const [name, setName] = useState('Boss')
  const [numArr, setNumArr] = useState([1,2,3])
  function changeNum(){
    console.log(num);
    
    setNum(30);
    setName('JK')
    setNumArr([3,4,5])
  }
  return (
    <div>
      <h1>Value of a is {num} <br/> Value of name is {name} <br /> Array is {numArr}</h1>
      <button onClick={changeNum}>Click Me</button>
    </div>
  )
}

export default App