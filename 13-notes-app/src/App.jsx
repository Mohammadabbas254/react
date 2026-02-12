import React from 'react'

const App = () => {

  const submitHandler =() =>{
    e.preventDefault()
    console.log("submitted");
    
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 items-start flex-col p-10'>
          <h1 className='text-3xl font-bold'>Add Notes</h1>
          
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
        {/* <img className='h-50' src='https://images.vexels.com/media/users/3/146695/isolated/preview/c31113aebbbf9c844d1caa832ad42cae-pinned-lined-sticky-note.png' /> */}
      </form>
      <div className='lg:w-1/2 gap-5 bg-gray-900 flex-wrap p-10'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
        
        </div>
      </div>
    </div>
  )
}

export default App