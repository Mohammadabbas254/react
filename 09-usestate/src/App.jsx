import React, { useState } from 'react'
import Example from './components/Example';

const App = () => {
  const [num, setNum] = useState(20);
  const [name, setName] = useState('Boss')
  const [numArr, setNumArr] = useState([1,2,3])
  const [count, setCount] = useState(0)
  function changeNum(){
    console.log(num);
    
    setNum(30);
    setName('JK')
    setNumArr([3,4,5])
  }
  function changeCountPlus(){
    setCount(count+1);
  }
  function changeCountMinus(){
    setCount(count-1);
  }
  return (
    <div>
      <h1>Value of a is {num} <br/> Value of name is {name} <br /> Array is {numArr}</h1>
      <button onClick={changeNum}>Click Me</button>
      <Example />

      <div>
        <h1 >{count}</h1>
        <button onClick={changeCountPlus}>Increase</button>
        <button onClick={changeCountMinus}>Decrease</button>

      </div>
    </div>
  )
}

export default App