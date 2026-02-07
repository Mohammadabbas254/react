import React, { useState } from 'react'
import Card from './Card'
const App = () => {

  const [num, setNum] = useState({user: 'Abbas', age:22})

  const btnClicked = () =>{
    // setNum(20) // async code  --2
    // console.log(num);        //--1
    const newNum = {...num};
    newNum.user = 'mOHAMMAD'
    setNum(newNum)

  }
  const [num2, setNum2] = useState([10, 20, 30])
    
  const btnClicked2 = () =>{
    const newNum2 = [...num2]
    newNum2.push(99)
    setNum2(newNum2)
    console.log(num2);
    console.log(newNum2);
    
    
  }
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>

      <h1>{num2}</h1>
      <button onClick={btnClicked2}>click</button>
      <Card />
    </div>
  )
}

export default App