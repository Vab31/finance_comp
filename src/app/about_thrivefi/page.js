import React from 'react'
import { FaChartLine, FaUsers, FaGlobe } from "react-icons/fa";
import Nav from '../component/nav';
import Footer from '../component/thriveFi/footer';


export default function Page() {
  return (
    <div>
        <Nav/>
 <div className="max-w-3xl my-4 mx-auto p-6 font-sans shadow-2xl">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <p className="mb-4">
        <strong className="font-semibold">At ThriveFi, our mission is to bring meaningful financial education to students around the world through engaging challenges that delve into the complexities of finance. Founded by Arizona-based high school student Anvay Arora, ThriveFi is stepping onto the global stage by organizing competitions and hosting expert-led discussions to raise awareness and promote literacy in personal and global finance. </strong>
       <br/>
         At the core of ThriveFi are our guiding principles—the 3 Cs: Conference, Competition, and Consulting. These pillars reflect our commitment to creating dynamic learning opportunities, encouraging informed dialogue, and providing mentorship to students as they navigate the world of finance. Each “C” has been built in with a missiong and drives the initiatives we create to empower the next generation of financial thinkers.

      </p>

   

      <h2 className="text-2xl font-semibold mb-2">What We Do</h2>

<ul className="list-disc list-inside mb-4">
  <li><span role="img" aria-label="checkmark">✔️</span> Organize finance-focused competitions that challenge students to think critically</li>
  <li><span role="img" aria-label="checkmark">✔️</span> Host global expert-led discussions to promote financial literacy</li>
  <li><span role="img" aria-label="checkmark">✔️</span> Empower students with real-world consulting experiences and mentorship</li>
  <li><span role="img" aria-label="checkmark">✔️</span> Deliver accessible, engaging financial education rooted in real-life application</li>
</ul>

{/* <h2 className="text-2xl font-semibold mb-2">Our Vision</h2> */}

{/* <ul className="list-disc list-inside mb-4">
  <li><span role="img" aria-label="conference">🎤</span> Expand our global conference series to spark informed financial dialogue</li>
  <li><span role="img" aria-label="competition">🏆</span> Launch innovative competitions to inspire the next generation of financial leaders</li>
  <li><span role="img" aria-label="community">🌐</span> Build an inclusive community of finance learners and professionals worldwide</li>
  <li><span role="img" aria-label="mentor">🤝</span> Provide personalized consulting and mentorship to help students grow</li>
</ul>

<p>
  At ThriveFi, we are more than just a platform—we are a global initiative led by students, for students.
</p> */}

    </div>
    <Footer/>
    </div>
  )
}
