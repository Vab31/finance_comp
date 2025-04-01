import React from "react";

export default function Event() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h3 className="text-base">Our First Event</h3>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">
              {" "}
              ReGenVest Essay Competition
            </h1>
            <p className="mb-8 leading-relaxed">
              Our inaugural essay competition invites students to explore and
              write about critical topics in finance, investment, and financial
              literacy. This competition aims to foster a deeper understanding
              of wealth creation, financial planning, and economic trends among
              young minds. Participants will have the opportunity to showcase
              their analytical skills, gain industry recognition, and compete
              for exciting rewards.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-950 rounded-xl text-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full rounded-2xl md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-2xl"
              alt="hero"
              src="/images/students.jpeg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
