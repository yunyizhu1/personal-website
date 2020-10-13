import React from 'react';

const Research = ({project}) => (
  <div className="project-preview">
    <div className="thumbnail">
      <img src={require("../../data/project_thumbnails/" + project.thumbnail) } />
    </div>
    <div className="descriptions">
      <div>
        <div className="title">
          {
            project.link  ?
              <a href={project.link} target="_blank">
                {project.title}
              </a> :
              <div>
                {project.title}
              </div>
          }
        </div>
        <div className="description">
          {project.description}
        </div>
      </div>
    </div>
  </div>
);


export default Research;