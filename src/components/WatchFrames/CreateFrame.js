import { Time_Frame } from './frames/Time_Frame.js'


export function CreateFrame(frame) {
   switch (frame) {
      case('TIME'):
         return Time_Frame()
      // case('CALENDAR'):
      //    return Calendar_Frame();
      // case('STOPWATCH'):
      //    return Stopwatch_Frame();
      // case('timer'):
      //    return new Timer_Frame();
      default:
         break
   }
   
}