import React, { useEffect } from "react";
import "./App.scss";

import ReactGA from "react-ga";

import Home from "./components/home/home.component";
import About from "./components/about/about.component";
import Work from "./components/work/work.component";
import Skills from "./components/skills/skills.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-43610616-3");
    ReactGA.pageview("/");
  });
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
