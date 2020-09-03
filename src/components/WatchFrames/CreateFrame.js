import React from 'react'
import { ClockCanvas } from './frames/clock/ClockCanvas.js'


export function CreateFrame(name) {
   let frame = ''
   //console.log('create 0')
   switch (name) {
      case('TIME'):
         frame = <ClockCanvas functionality='time' />
         break;
         // case('CALENDAR'):
      //    return _Frames('calendar');
      // case('STOPWATCH'):
      //    return Stopwatch_Frame('stopwatch');
      // case('TIMER'):
      //    return new Timer_Frame('timer');
      default:
         break;
   }
   
   return (
      <div className="frames">
         <div className="frames__clock-frame">
            {frame}
         </div>
      </div>
   )
}