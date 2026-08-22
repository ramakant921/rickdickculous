import "./index.css";
import PixelEffect from "./PixelEffect";
import PhotoEffect from "./PhotoEffect";
import Hero from "./Hero";
import About from "./About";
import Zbout from "./Zbout";
import Skills from "./Skills";
import Projects from "./Projects";
import Stars from "./Stars";

function App() {
  return (
    <>
    <PixelEffect />
    <Stars />
    <Hero />
    <Zbout />
    <Skills />
    <Projects />

    {/* <About /> */}
    {/* <div className="h-screen grid place-content-center"> */}
    {/* <PhotoEffect  */}
    {/* width={400} */}
    {/* height={650} */}
    {/* /> */}
    {/* </div> */}
    </>
  );
}

export default App;
