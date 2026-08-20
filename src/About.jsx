import "./index.css";
import crack from './assets/crack.png';
import dummy from './test_assets/forest.webp';

function About() {
  return (
    <>
    <section className="relative min-h-screen">
    
    <h1 className="text-[8rem] font-bold tracking-wide">
    ABOUT US
    </h1>


    <div className="flex">

    <div className="relative flex gap-[1rem] w-[35%]">
    <img src={dummy}
    className="pointer-events-none select-none
    w-[20rem]"
    />
    <p className="text-[1.5rem]">
    this is some dummy description i don't know what i am write
    tis is bus t taaeuhtn what ever you know rickdickculous.
    </p>
    <p className="text-[5rem] font-bold tracking-widest
    absolute bottom-0 left-[28%]"
    >
    ZALOS
    </p>
    </div>

    <div className="relative flex gap-[1rem] w-[35%]">
    <img src={dummy}
    className="pointer-events-none select-none
    w-[20rem]"
    />
    <p className="text-[1.5rem]">
    this is some dummy description i don't know what i am write
    tis is bus t taaeuhtn what ever you know rickdickculous.
    </p>
    <p className="text-[5rem] max-w-[1rem] font-bold tracking-widest
    absolute top-0 left-[-15%]"
    >
      {"SPODOR\nMON"}
    </p>
    </div>

    </div>
    </section>
    </>
  );
}

export default About;

