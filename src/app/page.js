import Image from "next/image";
import Nav from "./component/nav";
import Hero from "./component/home/hero";
import Downhero from "./component/home/downhero";
import Time from "./component/home/time";
import Bout from "./component/home/about";
import Footer from "./component/footer";
import Fre from "./component/home/fre";


export default function Home() {
  return (
    <div className="">
     <Nav/>
     <Hero/>
     <Bout/>
     <Time/>
     <Downhero/>
     <Fre/>
     <Footer/>
    </div>
  );
}
