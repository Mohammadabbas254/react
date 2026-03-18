import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [userData, setUserData] = useState([]);
  
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=30')
    
    setUserData(response.data)
    
    console.log(response.data)
    
  }

  useEffect(function(){
    getData()
  },[])

  let printUserData = <h3 className="text-gray-400 text-xs">No user Available</h3>
  console.log(printUserData);
  
  if(userData.length>0){
    printUserData = userData.map(function(elem, idx){
      
      return <div key={idx} target='_blank'>
        <a href={elem.url}>
          <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt='' />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>

    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
    </div>
  )
}

export default App