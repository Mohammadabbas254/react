import React,{useState} from 'react'

const Card = () => {
  const [num, setNum] = useState(10)

  const btnCliked =()=>{
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
  }
  return (
    <div>
        <h2>{num}</h2>
        <button onClick={btnCliked}>Click</button>
    </div>
  )
}

export default Card