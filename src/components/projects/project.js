import React from 'react';
import researchProjects from '../../data/projects.json';
import ProjectPreview from './project_preview.js';

const Research = () => (
  <div className="project-section">
    <div className="section-title">
      Other Projects
    </div>
    <div className="project-list">
      {researchProjects.map((project) =>
        <ProjectPreview key={project.id} project={project}
        />)}
    </div>
  </div>
);


export default Research;