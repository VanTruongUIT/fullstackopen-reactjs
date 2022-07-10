import React from 'react';
import Note from './Note';

const Course = ({course}) => {
  return (
    <div>
      {course.map(item => {
        return <Note key={item.id} note={item}/>;
      })}
    </div>
  )
}

export default Course;