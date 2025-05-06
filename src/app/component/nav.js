import React from 'react'



export default function Nav() {
  return (
<div>
  <header className="text-gray-600 body-font bg-white">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
      
      <img className="sm:w-[10%] h-[10%] w-[20%] my-2" src="/images/logo.png" />

      <nav className="flex flex-wrap items-center text-base justify-center md:ml-auto md:mr-0 md:justify-end w-full md:w-auto">
        <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href="/">Home</a>
        <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href="/about_thrivefi">About Us</a>
        <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href="/regenvest">ReGenVest</a>
      </nav>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLScrDPfVkT2_cd-gPOFke3YqXT1Tp8xfeDH2iQiuzkxuYMhf-g/viewform">
        {/* Register button can go here if needed */}
      </a>

    </div>
  </header>
</div>

  )
}
