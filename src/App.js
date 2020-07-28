import React, { useState } from "react";
import Welcome from "./Welcome";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Back from "./Back";
import { InView } from "react-intersection-observer";

const App = () => {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [projects, setProjects] = useState(false);

  const THRESHOLD = [0.5]; // Store multiple thresholds in a constant

  const handleWelcome = (e) => {
    if (e) {
      setHome(true);
      setAbout(false);
      setProjects(false);
      setContact(false);
    }
  };

  const handleAbout = (e) => {
    if (e) {
      setAbout(true);
      setHome(false);
      setProjects(false);
      setContact(false);
    }
  };

  const handleProjects = (e) => {
    if (e) {
      setHome(false);
      setProjects(true);
      setContact(false);
      setAbout(false);
    }
  };

  const handleContact = (e) => {
    if (e) {
      setContact(true);
      setHome(false);
      setProjects(false);
      setAbout(false);
    }
  };

  return (
    <>
      <Back />
      <InView threshold={THRESHOLD} onChange={(e, entry) => handleWelcome(e)}>
        <Welcome />
      </InView>

      <Navbar about={about} home={home} projects={projects} contact={contact} />

      <InView threshold={THRESHOLD} onChange={(e, entry) => handleAbout(e)}>
        <About />
      </InView>
      <InView threshold={THRESHOLD} onChange={(e, entry) => handleProjects(e)}>
        <Projects />
      </InView>
      <InView threshold={THRESHOLD} onChange={(e, entry) => handleContact(e)}>
        <Contact />
      </InView>
    </>
  );
};

export default App;
