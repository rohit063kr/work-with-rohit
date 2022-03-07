import { useState } from "react";

import ContactPageProvider from "./store/contact-page-context";
import ContactMe from "./components/ContactMe/ContactMe";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import MySkill from "./components/MySkill/MySkill";
import Footer from "./components/Footer/Footer";
import ContactBtn from "./components/ContactMe/ContactBtn";

import "./App.scss";
import MyWork from "./components/MyWork/MyWork";
import FAQ from "./components/FAQ/FAQ";

const App = function () {
  const [isHavingStickyNav, setIsHavingStickyNav] = useState(false);

  return (
    <ContactPageProvider>
      <div className="app">
        <ContactMe />
        <Navigation isStickyNav={isHavingStickyNav} />
        <Header toggleStickyMode={setIsHavingStickyNav} />
        <AboutMe />
        <MySkill />
        <MyWork />
        <FAQ />
        <Footer />
        <ContactBtn />
      </div>
    </ContactPageProvider>
  );
};

export default App;
