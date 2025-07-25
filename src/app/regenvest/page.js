import React from 'react'
import Nav from '../component/nav'
import Hero from '../component/regenvest_home/hero'
import Bout from '../component/regenvest_home/about'
import Time from '../component/regenvest_home/time'
import Downhero from '../component/regenvest_home/downhero'
import Fre from '../component/regenvest_home/fre'
import Footer from '../component/thriveFi/footer'
import Sponser from '../component/regenvest_home/sponser'
import CommentSection from '../component/comment'

export default function Page() {
  return (
    <div>

<Nav/>
<Hero/>
<Bout/>
<Time/>
<Downhero/>
<Sponser/>
<Fre/>
<CommentSection/>
<Footer/>

    </div>
  )
}
