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
                question: `01. What is <span style={{ color: 'rgb(20, 143, 128)' }}>ai</span>?`,
                answer:
                  `<span style={{ color: 'rgb(20, 143, 128)' }}>ai</span> is a market place that allows users to connect with anyone, anytime, anywhere for any personal and professional queries alike.`,
              },
              {
                question: '02. How can I get monetised on the platform?',
                answer:
                  `<span style={{ color: 'rgb(20, 143, 128)' }}>ai</span> gives the flexibility to anyone to determine the value of their services. We just charge a flat 20% platform fee to give a seamless experience for all users.`,
              },
              {
                question: `03. What kind of services can be offered on .<span style={{ color: 'rgb(20, 143, 128)' }}>ai</span>?`,
                answer:
                  'You can offer services based on your expertise which can range from business development, marketing, career advice, mental health and more.',
              },
              {
                question: '04. Can I host seminars and workshops on the platform?',
                answer:
                  'The Unishow feature enables users to host live online seminars, workshops, or presentations on various topics using the platform’s tools and resources.',
              },
              {
                question: '05. How are payments processed on the platform?',
                answer:
                  `<span style={{ color: 'rgb(20, 143, 128)' }}>ai</span> uses a secure payment system where users can make transactions using credit/debit cards, digital wallets, or other accepted payment methods to add money to their wallet.`,
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