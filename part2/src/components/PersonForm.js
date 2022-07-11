import React from 'react';

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          Name: 
          <input 
            onChange={props.handleOnChangeName} 
            value={props.newName} 
          />
        </div>
        <div>
          Number: 
          <input 
            onChange={props.handleOnChangeNumber} 
            value={props.newNumber} 
          />
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>      
    </div>
  )
}

export default PersonForm;