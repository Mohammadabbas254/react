import React from 'react'

const App = () => {

  // localStorage.clear()
  localStorage.setItem('user', 'Abbas')

  const user = localStorage.getItem('user')
  console.log(user)

  localStorage.setItem('age', 22)

  // localStorage.removeItem('age')

  const user2 = {
    username: 'abbas',
    age:22,
    city:'AP'
  }

  localStorage.setItem('user2', JSON.stringify(user2))
  return (
    <div>App</div>
  )
}

export default App