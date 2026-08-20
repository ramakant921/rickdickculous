import "./index.css";
import PixelEffect from "./PixelEffect";
import PhotoEffect from "./PhotoEffect";
import Hero from "./Hero";
import About from "./About";
import Zbout from "./Zbout";
import Skills from "./Skills";

function App() {
  return (
    <>
    <PixelEffect />
    <Hero />
    <Zbout />
    <About />
    <Skills />

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
