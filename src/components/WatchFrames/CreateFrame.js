import React from 'react';
import ClockCanvas from './frames/ClockCanvas.js';
import TimerFrame from './frames/TimerFrame.js';
import { CalendarFrame } from './frames/CalendarFrame.js';

export function CreateFrame(name) {
   const frame = (name) => {
      switch (name) {
         case 'TIME':
            return <div className="frames__clock-frame"><ClockCanvas frame="time" /></div>;
         case 'TIMER':
            return <div className="frames__clock-frame"><TimerFrame /></div>;
         case 'STOPWATCH':
            return <div className="frames__clock-frame"><ClockCanvas frame="stopwatch" /></div>;
         case 'CALENDAR':
            return <CalendarFrame />;
         default:
            return null;
      }
   };

   return frame(name) == null ? (
      <div />
   ) : (
      <div className="frames">
         {frame(name)}
      </div>
   );
}
