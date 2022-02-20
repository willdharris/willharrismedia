import React from "react";
import "./App.scss";
import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import About from "./components/about/about.component";
import Work from "./components/work/work.component";
import Skills from "./components/skills/skills.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
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
