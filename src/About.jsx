import "./index.css";
import crack from './assets/crack.png';

function About() {
  return (
    <>
    <section className="relative flex flex-col pb-40 px-40 min-h-screen overflow-hidden">
    
    <h1 className="text-center text-[7rem] font-bold tracking-wide text-(--hint)">
    ABOUT US
    </h1>

    <div className="w-[60%] mt-8 ml-[30%]">
    <div className="flex justify-between text-[4rem] tracking-[0.25rem] font-bold text-slate-00">
    <h1>ZALOS</h1>
    <h2>SPODORMON</h2>
    </div>

    <p className="text-[2rem] mt-8 font-semibold leading-[1.35] tracking-[0.12em] text-slate-1">We developers who enjoys turning ideas into real world projects.
    We are passionate about web developer, open source software and learning technologies.
    </p>
    </div>

    <p className="mt-auto w-[45%] text-[2rem] font-semibold leading-[1.35] tracking-[0.12em] text-slate-1">
    We mainly work on React,JS,Linux.
    We love experimenting about different tools to improve skills
    </p>

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
