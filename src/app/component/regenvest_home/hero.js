import React from 'react'

export default function Hero() {
  return (
    <div><section class="text-gray-600 body-font bg-black">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4  text-white font-bold">ReGenVest Challenge
          <br class="hidden lg:inline-block"/> By The Olive School
          </h1>
        <p class="mb-4 leading-relaxed text-6xl font-serif text-gray-200">India Edition</p>
    <p class="mb-3 leading-relaxed text-3xl font-serif text-gray-200">Student in grades IX through XII may participate</p>
    <p class="mb-3 leading-relaxed text-3xl font-serif text-gray-200">Deadline: May 30, 2025</p>

        <div class="flex justify-center">
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdjsiBbhJyug5E96pEzcPRKb5ag06RsDxgu8kbemsRuw88vrA/viewform?usp=header'>

          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
       </a>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 border-2 rounded-2xl border-white shadow-amber-100">
        <img class="object-cover object-center rounded-2xl" alt="hero" src="images/image.png"/>
      </div>
    </div>
  </section>
  </div>
  )
}
