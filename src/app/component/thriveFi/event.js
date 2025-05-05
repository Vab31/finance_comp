import React from "react";

export default function Event() {
  return (
    <div>  
      <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h3 className="text-base">Our First Event</h3>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">
              {" "}
              ReGenVest Essay Competition
            </h1>
            <p className="mb-8 leading-relaxed">
            ThriveFi is proud to announce the launch of the ReGenVest Challenge in India, an initiative designed to engage senior students in critical financial thinking. The challenge invites senior school students to write essay on a range of pressing financial topics, encouraging them to explore real-world problems and propose innovative solutions.

       </p>
            <div className="flex justify-center">
            <a href='https://docs.google.com/forms/d/e/1FAIpQLScrDPfVkT2_cd-gPOFke3YqXT1Tp8xfeDH2iQiuzkxuYMhf-g/viewform'>

              <button className="inline-flex text-white bg-gray-800 border-0  py-2 px-6 focus:outline-none hover:bg-gray-950 rounded-xl text-lg">
                Register Now
              </button>
              </a>
              <a href='/regenvest'>
              <button className="inline-flex text-white bg-gray-800 border-0 mx-2 py-2 px-6 focus:outline-none hover:bg-gray-950 rounded-xl text-lg">
                Learn More
              </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full rounded-2xl md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-2xl"
              alt="hero"
              src="/images/regenvestimg.jpeg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
