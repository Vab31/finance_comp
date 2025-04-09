"use client";


import React, { useState } from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

export default function Fre() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div>
      <section className=" bg-black text-white">
        <div className="container  px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-left text-white lg:text-6xl">
            Frequently asked questions
          </h1>

          <div className="mt-12 space-y-8">
            {[
              {
                question: `01. Who can participate in the competition?`,
                answer:
                  `Students from 9 to 12 grades are welcome to participate. The competition is open to all students who are passionate about finance, research, and analytical writing.`,
              },
              {
                question: 'Q2: Is there a participation fee?',
                answer:
                  `No, there is no participation fee. The competition is free and open to all eligible students.`,
              },
              {
                question: `Q3: What is the word limit for submissions?`,
                answer:
                  'Essays should be between 500 to 1000 words, ensuring a well-researched and structured argument.',
              },
              {
                question: 'Q4: What is the last date for submission?',
                answer:
                  'The final submission deadline is May 18, 2025. Participants are encouraged to submit their essays before the deadline to allow for any revisions if needed.',
              },
              {
                question: '05: When will the winners be announced?',
                answer:
                  `The winners will be announced on June 1, 2025, following a thorough evaluation by our panel of judges. Keep an eye on our website and official communications for updates!`,
              },
              {
                question: '06: What are the awards and recognition for winners?',
                answer:
                  `First Prize: Certificate of Achievement + Media Publication, Second Prize: Certificate of Achievement, Third Prize: Certificate of Achievement

`,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-2 border-gray-100 rounded-lg dark:border-gray-700"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
                data-aos="zoom-in" data-aos-duration="2500"
              >
                <button className="flex items-center justify-between w-full p-8">
                  <h1 className="font-semibold text-2xl text-white"  dangerouslySetInnerHTML={{
        __html: item.question.replace(/<span style={{ color: 'rgb\(20, 143, 128\)' }}>ai<\/span>/g, '<span style="color:rgb(20, 143, 128);">ai</span>')
      }}></h1>

                  <span className="text-blue-500  bg-gray-300 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 transform ${
                        hoveredIndex === index ? 'rotate-180' : 'rotate-0'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                
                    {hoveredIndex === index && (
  <div>
    <hr className="border-gray-700" />
    <p
      className="p-8 text-xl text-white text-left"
      dangerouslySetInnerHTML={{
        __html: item.answer.replace(/<span style={{ color: 'rgb\(20, 143, 128\)' }}>ai<\/span>/g, '<span style="color:rgb(20, 143, 128);">ai</span>')
      }}
    ></p>
  </div>
)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}