// import content
import { useEffect } from "react";
//import { content } from "../Content";



const Hero = () => {
  //const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
      {/*  <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            Jurgen
            <span className="text-dark_primary">Klop</span>
          </h1>
        </div>*/}

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>Liverpool</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">Explore</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            
              <div
                
                data-aos="fade-down"
                data-aos-delay={1 * 300}
                className="flex items-center w-80 gap-5
              "
              >
                <h3>8</h3>
                <p>Trent Alexander-Arnold excelling in new midfield hybrid role; notched two assists during 6-1 win over Leeds; assisted Roberto Firmino for late equaliser against Arsenal last week; registered second-most touches this season at Elland Road; Jamie Carragher analyses new role</p>
              </div>
            
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src="https://e0.365dm.com/23/04/768x432/skysports-trent-aa-liverpool_6124897.jpg?20230418103055"
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}; 

export default Hero;
