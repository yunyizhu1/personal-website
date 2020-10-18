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
        MIT Master's student
        <div>
          <a href="http://catalog.mit.edu/degree-charts/computer-science-engineering-course-6-3/" target="_blank">Computer Science and Engineering</a>
        </div>
        <div>
          minor in <a href="http://architecture.mit.edu/architecture-and-urbanism/degree/minor-design" target="_blank">Design</a>
        </div>
      </div>
      <div className="paragraph">
        <div className="semibold">
          Email:
        </div>
        <div>yunyizhu@mit.edu</div>
      </div>
      <div className="paragraph">
        <div className="semibold">
          Prior Supervisors:
        </div>
        <div>
          <a href="https://hcie.csail.mit.edu/stefanie-mueller.html" target="_blank">
            Prof. Stefanie Mueller
          </a>
        </div>
        <div>
          <a href="https://people.csail.mit.edu/dnj/" target="_blank">
            Prof. Daniel Jackson
          </a>
        </div>
      </div>
      <div className="paragraph">
        <div className="semibold">
          Research interests:
        </div>
        <div>Human Computer Interaction</div>
        <div>My current projects focus on digital fabrication. I am broadly interested in
          computational materials and wearable devices.
          I am also open to explore other research areas in HCI.
        </div>
      </div>
      <div className="paragraph">
        <div className="semibold">Background:</div>
        I have been involved in HCI research since 2018. I have worked as an undergraduate research assistant
        with <a href="https://hcie.csail.mit.edu/stefanie-mueller.html" target="_blank">
        Prof. Stefanie Mueller
      </a> and <a href="https://http://people.csail.mit.edu/dnj/" target="_blank">
        Prof. Daniel Jackson
      </a> at <a href="https://www.csail.mit.edu/" target="_blank">MIT CSAIL</a>.
        I won the <a href="https://www.eecs.mit.edu/news-events/announcements/best-best-superurop-2018-2019-award-winners" target="_blank">MIT EECS best undergraduate research award</a> in 2019.
      </div>
    </div>
  </div>
);

export default About;