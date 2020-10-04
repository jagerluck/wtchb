import React from 'react';





export const CalendarPopup = ({hide, date}) => {
   console.log(hide, date)
   const popup = hide
      ? 'calendar-popup__container--hide'
      : 'calendar-popup__container';

   return (
      <div className={popup}>
         <div className="calendar-popup">
            <span className="calendar-popup__close">❌</span>
            <h3 className="calendar-popup__prompts__title">
               What you'd like to do on {date.toDateString()}?
            </h3>
            <div className="calendar-popup__prompts">
               <button className="calendar-popup__button">
                  Add/Change task
               </button>
               <button className="calendar-popup__button">Remove task</button>
            </div>
            <span className="calendar-popup__tail"></span>
         </div>
      </div>
   );
};