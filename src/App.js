import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <h1>{width < 500 ? "Mobile App" : "App"}</h1>
      <p>Window Width: {width}px</p>
    </div>
  );
}

export default App;
