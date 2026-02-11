import React from 'react'

const App = () => {

  const submitHandler =() =>{
    e.preventDefault()
    console.log("submitted");
    
  }
  return (
    <div className='h-screen  bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
        className='flex justify-between items-start  p-10'>
        <div className='flex w-1/2 items-start gap-4 flex-col'>
          <input 
          type='text' 
          placeholder='Enter Notes Heading' 
          className='px-5 w-full py-2 outline-none border-2 rounded '
          />
          <textarea 
          type='text'
          className='px-5 w-full h-30 py-2 outline-none border-2 rounded '
          placeholder='Enter Details' 
          id=''
          />
          <button className='bg-white w-full outline-none text-black px-5 py-2 rounded'>Add Note</button>
        </div>
        <img className='h-50' src='https://images.vexels.com/media/users/3/146695/isolated/preview/c31113aebbbf9c844d1caa832ad42cae-pinned-lined-sticky-note.png' />
      </form>
    </div>
  )
}

export default App