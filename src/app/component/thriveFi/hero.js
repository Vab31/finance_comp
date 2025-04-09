import React from 'react'

export default function Hero() {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">Empowering Students
        <br className="hidden lg:inline-block"/>Through Financial Education
      </h1>
      <p className="mb-8 leading-relaxed">ThriveFi is a small organization dedicated to enhancing financial literacy by organizing events in collaboration with schools and communities.</p>
      <div className="flex justify-center">
        {/* <button className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-950 rounded-xl text-lg">Learn More</button> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full rounded-2xl md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded-2xl" alt="hero" src="/images/students.jpeg"/>
    </div>
  </div>
</section>
    </div>
  )
}
