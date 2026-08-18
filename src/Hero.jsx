import "./index.css";
import { useEffect, useRef } from "react";
import rock1 from "./assets/rock1.png"
import rock2 from "./assets/rock2.png"

function Hero() {
  // Trying to code parallax
  const titleRef = useRef(null);
  const rock1Ref = useRef(null);
  const rock2Ref = useRef(null);

  const mouse = {
    x: 0,
    y: 0, 
  }

  useEffect(() => {

    const handleMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // move
      rock1Ref.current.style.transform =
        `translate(${mouse.x * 0.05}px, ${mouse.y *0.05}px)`;
      rock2Ref.current.style.transform =
        `translate(${mouse.x * 0.02}px, ${mouse.y *0.02}px)`;
      titleRef.current.style.transform =
        `translate(${mouse.x * 0.01}px, ${mouse.y *0.01}px)`;
    }

    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    }
  }, []);

  return (
    <>
    <div id="" className="">
    <div className="logo mx-auto mb-2">
    <span>Portfolio</span>
    </div>
    <ul className="flex place-content-center gap-3">
    <li>Home</li>
    <li>Contact</li>
    <li>About</li>
    </ul>

    <h1 ref={titleRef} className="smoothIt z-0 text-center text-[12vw] font-bold">PORTFOLIO</h1>
    <img ref={rock2Ref} src={rock2}
    className="smoothIt z-1 w-[12vw] absolute top-[25%] left-[20%]"
    />
    <img ref={rock1Ref} src={rock1}
    className="smoothIt z-3 w-[20vw] absolute top-[43%] right-[18%]"
    />
    </div>

    <div className="coordinates absolute left-12 bottom-12 text-(0.8rem)">
    <p><span>EARTH</span> / 67
    </p>
    <p><span>LAT</span> / 69.69
    </p>
    <p><span>LON</span> / 96
    </p>
    </div>

    </>
  );
}

export default Hero;
