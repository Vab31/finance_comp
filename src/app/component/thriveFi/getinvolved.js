import React from "react";

export default function Getinvolve() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl title-font mb-4 text-gray-900 font-extrabold ">
              Get Involved
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Join us in empowering individuals with essential financial
              knowledge and skills. Whether you're a student looking to enhance
              your financial literacy, a school or community eager to provide
              valuable education, or a sponsor or speaker wanting to make an
              impact, there’s a place for you in our mission. Together, we can
              create opportunities for learning, growth, and financial
              empowerment.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="text-gray-900 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  For Students
                </h2>
                <p className="leading-relaxed py-1.5">
                  Participant in our events to lern and grow you financial
                  knowledge
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  className="text-gray-900 w-12 h-12 mb-3 inline-block"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 17V7"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 17V7"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 22V12"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h2 className="title-font font-medium text-3xl text-gray-900">
                  For Schools & Communities
                </h2>
                <p className="leading-relaxed">
                  {" "}
                  Partner with us to bring financial education programs to your
                  studnets
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-900 w-12 h-12 mb-3 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                    stroke="black"
                    stroke-width="2"
                  />
                  <path
                    d="M12 22V16"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M8 22V18"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16 22V18"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  For Sponsors & Speakers
                </h2>
                <p className="leading-relaxed">
                  Support and contribute to our mission of financial literacy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
