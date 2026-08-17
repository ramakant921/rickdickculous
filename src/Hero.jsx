import "./index.css";
import rock1 from "./assets/rock1.png"
import rock2 from "./assets/rock2.png"

function Hero() {
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

    <h1 className="z-0 text-center text-[12vw] font-bold">PORTFOLIO</h1>
    <img src={rock2}
    className="z-1 w-[12vw] absolute top-[25%] left-[20%]"
    />
    <img src={rock1}
    className="z-3 w-[20vw] absolute top-[43%] right-[18%]"
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
