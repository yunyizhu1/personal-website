import React from 'react';
import Profile from './profile2.jpeg';

const About = () => (
  <div className="about-container">
    <img src={Profile} alt="./profile1.jpg"/>
    <div className="self-description-container">
      <p>
        Hello, I am Yunyi! I am an undergraduate student at MIT majoring in
        Computer Science and Engineering and minoring in Design.
      </p>
      <p>
        I enjoy programming, designing, art-making and prototyping.
        I strive to lower the barrier for people to create
        by making higher-level programming languages
        and customizable designer tools.
      </p>
      <p>
        I worked as a research assistant in HCIE Lab and Software Design Lab under MIT CSAIL,
        where I wish to apply my creative and technical skills in meaningful research.
      </p>
    </div>
  </div>
);

export default About;