import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Testimonial from "./Testimonial/Testimonial";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import WorkProcess from "./WorkProccess/WorkProcess";
import Education from "./Education/Education";
import Skills from './Skills/Skills'
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hazrat Ali | Home</title>
        <meta
          property="og:title"
          content="Akram Hossain's Personal Portfolio Website"
        />
        <meta
          property="og:description"
          content="MERN Stack Developer || Full-stack Developer || Front-End Developer || React JS Develooper || JavaScript Developer"
        />
        <meta property="og:url" content="https://akram-sakib.netlify.app/" />
        <meta
          property="og:image"
          content="https://i.ibb.co/0F27pVK/Akram-Sakib.png"
        />
      </Helmet>
      <Banner />
      <Services />
      <Testimonial />
      <Projects />
      <Skills />
      <Education />
      <WorkProcess />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
