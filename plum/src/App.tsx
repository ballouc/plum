import { useState } from "react";
import plumLogo from "./assets/plum.png";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <div>
        <a href="https://example.com" target="_blank">
          <img src={plumLogo} className="logo" alt="Plum Logo" />
        </a>
      </div>
      <h1>Plum LLC</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Click <b>here</b> to learn more about Plum.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
