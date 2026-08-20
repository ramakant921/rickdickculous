import "./index.css";
import divider from './assets/divider.png';
import dummy from './assets/pic.webp';

function About() {
  return (
    <>
    <section className="relative h-screen px-16 pb-12">
    
    <h1 className="text-[10rem] font-bold tracking-widest">
    ABOUT US
    </h1>

    <div className="flex w-full justify-between">

    {/* LEFT */}
    <div className="mt-[11rem] w-[36%]">
    <div className="flex relative gap-6">
    <img src={dummy}
    className="pointer-events-none select-none
    max-w-[52%] h-auto scale-x-[-1]"
    />
    <p className="text-[1.6rem] -mt-2">
    this is some dummy description i don't know what i am write
    tis is bus taaeuhtn what ever you know rickdickculous.
    </p>
    <p className="text-[5rem] font-bold tracking-widest
    absolute bottom-0 left-[31%] leading-none mix-blend-difference"
    >
    ZALOS
    </p>
    </div>
    </div>

    {/* RIGHT */}
    <div className="relative -mt-[11rem] w-[36%]">
    <img src={dummy}
    className="pointer-events-none select-none
    max-w-[52%] h-auto ml-auto"
    />

    <p className="mt-4 ml-auto max-w-[60%] text-[1.5rem] text-right">
    this is some dummy description i don't know what i am write
    tis is bus taaeuhtn what ever you know rickdickculous.
    </p>
    <p className="text-[5rem] max-w-[1rem] font-bold tracking-widest
    absolute top-0 right-[69%] mix-blend-difference"
    >
      {"SPODOR\nMON"}
    </p>
    </div>

    </div>

    <img src={divider}
    className="absolute top-0 left-[50%] -translate-x-[40%]
    h-screen"
    />
    </section>
    </>
  );
}

export default About;

