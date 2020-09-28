import React from 'react'
import ClockCanvas from './frames/ClockCanvas.js'
import TimerFrame from './frames/TimerFrame.js';
import { CalendarFrame } from './frames/CalendarFrame.js';



export function CreateFrame(name) {
   let frame = ''
   //console.log('create 0')
   switch (name) {
      case 'TIME':
         frame = <ClockCanvas frame='time' />;
         break;
      // case('CALENDAR'):
      //    return _Frames('calendar');
      case 'TIMER':
         frame = <TimerFrame />;
         // case(''):
         break;
      case 'STOPWATCH':
         frame = <ClockCanvas frame='stopwatch' />;
         // case(''):
         break;
      case 'CALENDAR':
         frame = <CalendarFrame />;
         // case(''):
         break;
      default:
         frame = null;
         break;
   }
   
   return frame == null ? (<div/>) : (
      <div className='frames'>
         <div className='frames__clock-frame'>
            {frame}
         </div>
      </div>
   ) 
}
