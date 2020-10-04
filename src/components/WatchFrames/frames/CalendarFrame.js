import React, {useRef, useState, useEffect} from 'react';
import DayPicker from 'react-day-picker';
import { CalendarPopup } from 'components/WatchFrames/frames/calendar/CalendarPopup.js';
// import AddTodo from 'calendar/'
// import './calendar/style.css';



const birthdayStyle = `.DayPicker-Day--highlighted {
  background-color: orange;
  color: white;
}`;



export function CalendarFrame(props) {
   const [selectedDays, setSelectedDays] = useState([new Date(2020, 9, 30), new Date(2020, 9, 11)]);
   const [clickedDay, setClickedDay] = useState(null);
   const [hidePopup, setHidePopup] = useState(false);
   const calendarDiv = useRef(null);

   // add listeners to parent node so it could close active selections
   // useEffect(() => {
   //    calendarDiv.addEventListener('blur', () => {
   //       if (clickedDay == null) return; 
   //       clickedDay.classList.toggle('.calendar-task-prompting');
   //       setClickedDay(null);
   //    }, true);
   // }, []);

   const provDateOptions = () => {

      return /* add html tags afterwards */;
   }
   
   const askForChanges = (e) => {
      setClickedDay(e.target);
      clickedDay.classList.toggle('--ask');
   }
   
   const handleDayClick = (day, selected, dayPickerInput) => {
      const d = new Date(day);
   }
   const regex = /--selected/; 

   /*
   steps to enable popup msg: 
   - create element in react at first render and hide it ititially;
   - set y and x coordinates + unhide property to this element;
   - keep element visible while there weren't clicked ESC or places outside the element. First idea is to also create the div with 100% width and 100% height and just listen to it's clicks and then do what was needed or listen to ESC key;
   */


   // workaround to hide daypicker window
   // const descriptors = Object.getOwnPropertyDescriptors(DayPickerInput);
   // descriptors.prototype.value.hideDayPicker = function() { return; };
   
   const processDatePicks = (date, locale, e) => {
      askForChanges(e);

      if (selectedDays.containsDate(date)) return setSelectedDays(selectedDays.filter((d) => d.getTime() !== date.getTime()));
      setSelectedDays(selectedDays.concat(date));
   };



   
   return (
      <div className="calendar-frame" ref={calendarDiv}>
         <DayPicker
            onDayClick={processDatePicks}
            selectedDays={selectedDays}
            todayButton="Current Month"
         />
         <CalendarPopup hide={hidePopup} date={new Date(Date.now())}/>
      </div>
   );
}



/* 
1) click
2) use element from state and set it's top/left props according to clicked element;
3) destructure element if something else was clicked (either outside this element or it's controlling buttons like 'close' or 'confirm' etc.)
*/