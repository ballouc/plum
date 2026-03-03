import "./css/App.css";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Navbar from "./components/Navbar";

function App() {
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/contact":
      component = <Contact />;
      break;
    case "/about":
      component = <About />;
      break;
  }

  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
