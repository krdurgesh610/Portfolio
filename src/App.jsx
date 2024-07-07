import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Tools from "./components/Tools";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Tools />
      <Contact />

      <SocialLinks />
    </>
  );
}

export default App;
