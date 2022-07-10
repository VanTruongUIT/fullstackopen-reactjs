import React from 'react';

const Note = ({note}) => {
  return (
    <div 
      style={{margin: "10px 0px"}}
    >
      {note.name} {note.exercises}
    </div>
  );
};

export default Note;