import React from 'react'



export default function Nav() {
  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
   
     <img className='sm:w-[10%] h-[10%] w-[20%] my-2' src='/images/logo.png' />
  
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">About Us</a>
      <a className="mr-5 hover:text-gray-900">Events</a>
      <a className="mr-5 hover:text-gray-900" href='/regenvest'>ReGenVest</a>
    </nav>
    <button className="inline-flex items-center bg-red-400 border-0 py-1 px-3 text-white focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0">Register 
      
    </button>
  </div>
</header>
    </div>
  )
}
