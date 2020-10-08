import React from 'react';
import Profile from './profile2.jpeg';
// import { Link } from 'react-router-dom';

const About = () => (
  <div className="about-container">
    <img src={Profile} alt="./profile1.jpg"/>
    <div className="self-description-container">
      <div className="my-name">
        Yunyi Zhu
      </div>
      <div className="paragraph">
        Undergraduate
        and <a href="https://www.eecs.mit.edu/academics-admissions/undergraduate-programs/6-p-meng-program">MEng</a> student at MIT majoring
        in <a href="http://catalog.mit.edu/degree-charts/computer-science-engineering-course-6-3/">Computer Science and Engineering</a> and
        minoring in <a href="http://architecture.mit.edu/architecture-and-urbanism/degree/minor-design">Design</a>.
      </div>
      <div className="paragraph">
        <div className="semibold">
          Email:
        </div>
        <div>yunyizhu@mit.edu</div>
      </div>
      <div className="paragraph">
        <div className="semibold">
          Research interests:
        </div>
        <div>Human Computer Interaction, Digital Fabrication, Input Technologies, Design Research</div>
      </div>
      <div className="paragraph">
        <div className="semibold">Background:</div>
        I completed
        an <a href="http://catalog.mit.edu/degree-charts/computer-science-engineering-course-6-3/">
          SB
        </a> in Computer Science and Engineering
        at MIT.
        During this time, I worked as an undergraduate research student
        in <a href="https://hcie.csail.mit.edu/">
        HCI Engineering Group
      </a> and <a href="https://sdg.csail.mit.edu/">
        Software Design Group
      </a> at <a href="https://www.csail.mit.edu/">MIT CSAIL</a>.
        Currently, I am an MEng student and my academic and research advisor is Professor Stefanie Mueller.
      </div>
    </div>
  </div>
);

export default About;