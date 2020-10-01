import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import React from 'react';
// import './calendar/style.css';




export function CalendarFrame(props) {
   const [selectedDay, setSelectedDay] = React.useState(null);
   const handleDayClick = (day, {selected}) => {
      selected ? setSelectedDay(null) : setSelectedDay(day)
   }

   const descriptors1 = Object.getOwnPropertyDescriptors({name: 'try'})
   const descriptors = Object.getOwnPropertyDescriptors(DayPickerInput);
   const descriptors0 = Object.getOwnPropertyNames(DayPickerInput);
   descriptors.prototype.value.hideDayPicker = function() { return; };
   console.log(descriptors)
   console.log(descriptors0)
   console.log(descriptors1)

   return (
      <div className="calendar-frame">
         <DayPickerInput
            showOverlay={true}
            hideOnDayClick={false}
            dayPickerProps={{
               todayButton: 'Today',
            }}
            keepFocus={false}
         />
      </div>
   );
}