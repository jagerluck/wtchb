import React from 'react';


const mock = new Date(2020, 9, 1);
const mock = new Date(2020, 8, 30);

export const TaskPopup = (props) => {
   const { taskText, taskDate, taskColor } = props;


   return (
      <div className="popup-container">
         <input type="text" />
         <input type="text" />
      </div>
   )
}