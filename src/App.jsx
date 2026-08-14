import "./index.css";
import PixelEffect from "./PixelEffect";
import PhotoEffect from "./PhotoEffect";

function App() {
  return (
    <>
    <PixelEffect />
    <div className="h-screen grid place-content-center">
    <PhotoEffect 
    width={400}
    height={650}
    />
    </div>
    </>
  );
}

export default App;
