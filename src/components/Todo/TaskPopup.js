import React from 'react';


const mock = new Date();

export const TaskPopup = (props) => {
   const { taskText, taskDate, taskColor } = props;


   return (
      <div className="popup-container">
         <input type="text" />
         <input type="text" />
      </div>
   )
}