import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import React from 'react';
// import AddTodo from 'calendar/'
// import './calendar/style.css';




export function CalendarFrame(props) {
   const [selectedDay, setSelectedDay] = React.useState(null);
   
   const handleDayClick = (day, selected, dayPickerInput) => {
      const d = new Date(day);
   }
   const regex = /--selected/; 

   const showMeThePop = (e) => {
      regex.test(e.target.className) ? console.log('founded selected element') : console.log('just regular one')
      // easiest way to just listen to event and then if class selected fire a popup. but feels a bit clumsy 
   }

   const descriptors = Object.getOwnPropertyDescriptors(DayPickerInput);
   descriptors.prototype.value.hideDayPicker = function() { return; };

   const newDate1 = new Date(2020, 9, 30);
   const newDate2 = new Date(2020, 9, 31);

   return (
      <div className="calendar-frame">
         <DayPickerInput
            showOverlay={true}
            hideOnDayClick={false}
            dayPickerProps={{
               todayButton: 'Today',
               selectedDays: [newDate1, newDate2],
            }}
            keepFocus={false}
            onMouseOver={showMeThePop}
            onDayChange={handleDayClick}
         />
      </div>
   );
}