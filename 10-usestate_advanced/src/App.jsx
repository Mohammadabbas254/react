import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user: 'Abbas', age:22})

  const btnClicked = () =>{
    // setNum(20) // async code  --2
    // console.log(num);        //--1
    const newNum = {...num};
    newNum.user = 'mOHAMMAD'
    setNum(newNum)
    
  }
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App