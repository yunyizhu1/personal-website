import React from 'react';
import Profile from './profile2.jpeg';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="about-container">
    <img src={Profile} alt="./profile1.jpg"/>
    <div className="self-description-container">
      <p>
        Hello, I am Yunyi! I am an undergraduate student at MIT majoring
        in <a href="http://catalog.mit.edu/degree-charts/computer-science-engineering-course-6-3/">Computer Science and Engineering</a> and
        minoring in <a href="http://architecture.mit.edu/architecture-and-urbanism/degree/minor-design">Design</a>.
      </p>
      <p>
        I enjoy <a href="https://github.com/yunyizhu1">programming</a>, <Link to="/art">designing</Link>, <a href="https://www.deviantart.com/meow9357">art-making</a> and <Link to="/art">prototyping</Link>.
        I strive to lower the barrier for people to create
        by making higher-level programming languages
        and customizable designer tools.
      </p>
      <p>
        I worked as a research assistant
        in <a href="https://hcie.csail.mit.edu/">HCIE Lab</a> and <a href="https://sdg.csail.mit.edu/">Software Design Group</a> under <a href="https://www.csail.mit.edu/">MIT CSAIL</a>,
        where I tried to apply my creative and technical skills in meaningful <Link to="/research">research</Link>.
      </p>
    </div>
  </div>
);

export default About;