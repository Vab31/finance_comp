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
                  `Any student in grades IX through XII may participate`,
              },
              {
                question: 'Q2: Is there a participation fee?',
                answer:
                  `No, there is no participation fee. The competition is free and open to all eligible students.`,
              },
              {
                question: `Q3: What are the language requirements and word limits for submissions?`,
                answer:
                  'The essay must be written in English and must contain between 1,500 and 2,000 words to qualify.',
              },
              {
                question: 'Q4: What is the last date for submission?',
                answer:
                  'The final submission deadline is June 20, 2025. Participants are encouraged to submit their essays before the deadline to allow for any revisions if needed.',
              },
              {
                question: '05: When will the winners be announced?',
                answer:
                  `Results will be published on www.thethrivefi.com as well as www.theoliveschool.com websites. A formal communication will also be sent to the school and registered email addresses by June 26, 2025`,
              },
              {
                question: '06: What are the awards and recognition for winners?',
                answer:
                  `First Prize: Certificate of Achievement + Essay Publication in a reputed
 finance media outlet,
 Second & Third Prize: Certificate of Achievement,
 All Participants: Certificate of Participation`,
              },
              {
                question: '07: Can I co-author my essay with a friend?',
                answer:
                  `No, each entry must be submitted under a single student's name.`,
              },
              {
                question: '08: Are there specific topics to choose from?',
                answer:
                  `Yes. Each essay must address one of the given topics and present a well-structured, research-backed argument.

`,
              },
              {
                question: '09:Are references or citations required in the essay?',
           
                answer:`Yes, any references to published print or digital media must be cited at the bottom of the essay. Participants may use either APA or Harvard referencing style.`,
              },
              {
                question: '10:Can I include my name or personal details in the essay?',
           
                answer:`No. Essays must not include any identifying details (name, school, etc.) to maintain impartiality.`,
              },
              {
                question: '11:What are the judging criteria?',
           
                answer:`Essays will be evaluated based on:

Depth of Analysis (30%),

Argumentation & Structure (25%),

Use of Evidence & Research (20%),

Originality & Creativity (15%),

Writing Style & Clarity (10%)`,
              },
              {
                question: '12:Are there any originality and authenticity requirements for the essay?',
           
                answer:`Yes, essays must be original, unpublished, and not written using AI tools. All entries will be checked for plagiarism and AI use; violations will lead to disqualification. Copyrights are respected, but ThriveFi and The Olive School will not be responsible for any infringement.`,
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