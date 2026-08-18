import "./index.css";
import crack from './assets/crack.png';

function About() {
  return (
    <>
    <section className="relative min-h-screen overflow-hidden bg-[#16202b] text-white px-7 py-12">
    <div className="relative z-10 mx-auto max-w-4xl">
      <h1 className="text-center text-7xl font-bold tracking-wide text-[#f0444e]">
        ABOUT US
      </h1>
      <div className="mt-8 grid grid-cols-2 text-center">
        <h1 className="text-[40px] font-bold tracking-[0.25em] text-slate-00">
          ZALOS
        </h1>
        <h2 className="text-[40px] font-bold tracking-[0.18em] text-slate-00">
          SPODORMON
        </h2>


          <div className="ml-auto mt-6 max-w-[560px] pr-2">
              <p className="text-[20px] font-semibold leading-[1.35] tracking-[0.12em] text-slate-1">We developers who enjoys turning ideas into real world projects.
              We are passionate about web developer, open source software and learning technologies.
</p>
          </div>
      </div>


      <div className="mt-65 ml-10 max-w-[280px] pr-2">
        <p className="text-[20px] font-semibold leading-[1.35] tracking-[0.12em] text-slate-1">
          We mainly work on React,JS,Linux.
          We love experimenting about different tools to improve skills
        </p>
      </div>
      </div>

      <img src={crack} alt="" className="pointer-events-none 
      absolute 
      bottom-[-1px]
      z-22 w-[-800px] 
      select-none"/>
      </section>
    </>
  );
}

export default About;

