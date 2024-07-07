import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Timeline from "./components/timeline/Timeline";

const App = () => {
  return <div>
  <section id="Homepage">
    <Navbar/>
    <Hero/>
  </section>  
  <section id="Projects">
    <Parallax type="services"/>
  </section>
  <Portfolio/>
  <section id="Experience">
    <Parallax type="portfolio"/>
  </section>
  <section id="Timeline">
    <Timeline/>
  </section>
  <section id="Contact"><Contact/></section>
  </div>
};

export default App;