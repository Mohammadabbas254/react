import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Mohammad' age={22} profile='https://images.unsplash.com/photo-1765737410226-821698e82cd9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user="Olaiii"  profile="https://images.unsplash.com/photo-1765325780680-db8df3427098?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzV8fHxlbnwwfHx8fHw%3D" />
      <Card user='Amjad' age={22} profile='https://images.unsplash.com/photo-1765498069322-27eb70ae2d9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDV8fHxlbnwwfHx8fHw%3D' />
    </div>
  )
}

export default App