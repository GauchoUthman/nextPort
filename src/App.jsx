// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
//import Skills from "./components/Skills";
//import Service from "./components/Services";
//

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
//import { StyledChart } from './components/chart';
//import ScrollToTop from './components/scroll-to-top';
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
      <HelmetProvider>
      
        <ThemeProvider>
          
      <Hero />
    {/*  <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />*/}
      </ThemeProvider>
     
    </HelmetProvider>
    </div>
  );
};

export default App;
