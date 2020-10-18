import React from 'react';
import researchProjects from '../../data/projects.json';
import ProjectPreview from './project_preview.js';

const Research = () => (
  <div className="project-section">
    <div className="section-title">
      Other Fabrication Related Projects
    </div>
    <div className="project-list">
      {
        researchProjects
        .filter((project)=>(project.category === "fab"))
        .map((project) =>
        <ProjectPreview key={project.id} project={project}
        />)
      }
    </div>
    <div className="section-title">
      Other Research Projects
    </div>
    <div className="project-list">
      {
        researchProjects
          .filter((project)=>(project.category === "research"))
          .map((project) =>
            <ProjectPreview key={project.id} project={project}
            />)
      }
    </div>
    <div className="section-title">
      Other Skills
    </div>
    <div className="project-list">
      {
        researchProjects
          .filter((project)=>(project.category === "other"))
          .map((project) =>
            <ProjectPreview key={project.id} project={project}
            />)
      }
    </div>
  </div>
);


export default Research;