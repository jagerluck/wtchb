import { Time_Frame } from './frames/Time.js'


export function CreateFrame(factory) {

   switch(factory) {
      case('TIME'):
         return Time_Frame();
      // case('CALENDAR'):
      //    return Calendar_Frame();
      // case('STOPWATCH'):
      //    return Stopwatch_Frame();
      // case('timer'):
      //    return new Timer_Frame();
      default:
         return Time_Frame();
   }
   
}