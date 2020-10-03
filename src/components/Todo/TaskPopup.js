import React from 'react';


const mockDates = [new Date(2020, 9, 1),new Date(2020, 8, 30)];




export const TaskPopup = (props) => {
   const { taskText, taskDate, taskColor } = props;
   

   return (
      <div className="popup-container">
         <input type="text" />
         <input type="text" />
      </div>
   )
}