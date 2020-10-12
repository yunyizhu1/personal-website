import React from 'react';
import courses from '../../data/teaching.json';

const Awards = () =>
  (
    <div className="teaching-section">
      <div className="section-title">
        Teaching
      </div>
      <div className="teaching">
        {courses.map((course) =>
          <div className="preview">
            <div className="title">
              { course.link ?
                <a href={course.link} target="_blank">
                  {course.courseName}
                </a> :
                <div>
                  {course.courseName}
                </div>
              }
            </div>
            <div className="descriptions">
              {course.term}
            </div>
          </div>
        )}
      </div>
    </div>
  );


export default Awards;