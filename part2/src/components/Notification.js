import React from 'react';


const errorStyle = {
  border: "5px",
  padding: "10px",
  fontSize: "25px",
  background: "lightgray",
  borderStyle: "solid",
  borderRadius: "5px",
  marginBottom: "10px", 
  color: "red",
};
const successStyle = {
  border: "5px",
  padding: "10px",
  fontSize: "25px",
  background: "lightgray",
  borderStyle: "solid",
  borderRadius: "5px",
  marginBottom: "10px", 
  color: "green",
}


const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }
  if (message.includes('[ERROR]')) {
    <div 
      className="message"
      style={errorStyle}
    >
      {message}
    </div>
  } else
  return (
    <div 
      className="message"
      style={successStyle}
    >
      {message}
    </div>
  )
}

export default Notification;