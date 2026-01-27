import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D',
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGV8ZW58MHx8MHx8fDA%3D',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1554180842-41b1dd69d588?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmxzfGVufDB8fDB8fHww',
      intro: '',
      tag: 'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App