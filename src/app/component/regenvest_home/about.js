import React from 'react'

export default function Bout() {
  return (
    <div>
<section class="text-gray-600 body-font bg-gray-300">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="/images/olive.png"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Why To Participate
        <br class="hidden lg:inline-block"/>
      </h1>
      <p class="mb-8 leading-relaxed">The Olive School proudly presents its Finance Essay Competition, designed to encourage young minds to explore the dynamic world of finance. Rooted in our core values of lifelong learning, inclusive education, and personalized growth, this competition challenges students to think critically, research deeply, and articulate their ideas on key financial topics.
<br/>
Competition Details:<br/>
📅 <b className='font-extrabold text-black'>Speaker Sessions Date: Saturday and Sunday,

May 17 and 18</b> <br/>
🔍 <b className='font-extrabold text-black'>Competition Format: Finance ESSAY writing</b>
<br/>
This competition is more than just a contest—it's an opportunity for students to develop essential writing and analytical skills, preparing them for real-world financial literacy.</p>
      {/* <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div> */}
    </div>
  </div>
</section>

    </div>
  )
}
