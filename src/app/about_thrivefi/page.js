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
        <strong className="font-semibold">ThriveFi, we believe that financial literacy is the foundation for personal and professional success.</strong>
      </p>

      <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>

      <p className="mb-4">
        A dynamic platform dedicated to bridging the gap between theoretical finance and real-world applications. We bring together finance enthusiasts, students, and industry professionals through engaging discussions, expert-led sessions, and interactive competitions we goal to make financial education more accessible, practical, and impactful.
      </p>

      <h2 className="text-2xl font-semibold mb-2">What We Do</h2>

      <ul className="list-disc list-inside mb-4">
        <li><span role="img" aria-label="checkmark">✔️</span> Investment strategies and stock market insights</li>
        <li><span role="img" aria-label="checkmark">✔️</span> Personal finance management and wealth-building techniques</li>
        <li><span role="img" aria-label="checkmark">✔️</span> Financial technology (FinTech) and emerging trends</li>
        <li><span role="img" aria-label="checkmark">✔️</span> Case study challenges and real-world problem-solving</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>

      <ul className="list-disc list-inside mb-4">
        <li><span role="img" aria-label="people">👥</span> Expand our expert-led talk series with industry leaders</li>
        <li><span role="img" aria-label="trophy">🏆</span> Host more finance-related competitions to encourage hands-on learning</li>
        <li><span role="img" aria-label="building">🏗️</span> Build a stronger community of finance professionals and learners</li>
        <li><span role="img" aria-label="lightbulb">💡</span> Make financial knowledge accessible to students and young professionals</li>
      </ul>

      <p>
        At ThriveFi, we are more than just a platform—we are a movement towards financial empowerment and informed decision-making.
      </p>
    </div>
    <Footer/>
    </div>
  )
}
