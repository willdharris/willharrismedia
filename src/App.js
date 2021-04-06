import React from "react";
import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage.component";
import About from "./components/about/about.component";
import Resume from "./components/resume/resume.component";
import Work from "./components/work/work.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <HomePage />
      <About />
      <Resume />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
