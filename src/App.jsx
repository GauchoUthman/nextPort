// import components
import Hero from "./components/Hero";
//import Navbar from "./Layouts/Navbar";
//import Skills from "./components/Skills";
//import Service from "./components/Services";
//
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      
      <Hero />
    {/*  <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />*/}
      
    </div>
  );
};

export default App;
