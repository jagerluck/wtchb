import React from 'react';
import ClockCanvas from './frames/ClockCanvas.js';
import TimerFrame from './frames/TimerFrame.js';
import { CalendarFrame } from './frames/CalendarFrame.js';

export function CreateFrame(name) {
   const frame = (name) => {
      switch (name) {
         case 'TIME':
            return <ClockCanvas frame="time" />;
         case 'TIMER':
            return <TimerFrame />;
         case 'STOPWATCH':
            return <ClockCanvas frame="stopwatch" />;
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
         <div className="frames__clock-frame">{frame(name)}</div>
      </div>
   );
}
