import React from 'react';

export default function Bout() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-300">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/olive.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Why To Participate
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-4 leading-relaxed">
              The Olive School proudly presents its Finance Essay Competition. The competition aims to engage young minds in meaningful discourse on real
world issues involving finance, sustainability, and economic strategy.
 Participants will explore the evolving landscape of sustainable finance through
 a thought-provoking essay competition that challenges critical thinking,
 research, and analytical reasoning.
            </p>
            <div className="mb-8 leading-relaxed text-left">
              {/* <p>
                📅{' '}
                <span className="font-extrabold text-black">
                  Speaker Sessions Date: Saturday and Sunday, May 17 and 18
                </span>
              </p> */}
           
              <p>
                🔍{' '}
                <span className="font-extrabold text-black">
                  Competition Format: Essay Competition to choose from 1 out of 3 topics
                </span>
              </p>
              <ol className="list-decimal list-inside mt-2 space-y-2 text-left">
                <li>
                  <b>The Role of Sustainable Finance in Addressing Climate Change</b>
                  <br />
                  <i>
                    To what extent can sustainable finance effectively mitigate climate risks while
                    ensuring economic growth?
                  </i>
                </li>
                <li>
                  <b>ESG Investing: A Genuine Path to Sustainability or Just Greenwashing?</b>
                  <br />
                  Critically assess the impact of Environmental, Social, and Governance (ESG)
                  investing on corporate behavior and financial performance.
                </li>
                <li>
                  <b>The Future of Green Bonds: A Catalyst for Sustainable Development?</b>
                  <br />
                  Evaluate the effectiveness of green bonds in financing sustainable projects and
                  driving global environmental goals.
                </li>
              </ol>
              <p className="mt-4">
              We believe that participation from your school would significantly contribute
 to the vibrancy of the event and provide an excellent opportunity for your
 students to showcase their talent on a national platform
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

