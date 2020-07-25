import { Time_Frame, Calendar_Frame, Stopwatch_Frame } from './Frames.js'


export function CreateFrame(factory) {

   switch(factory) {
      case('time'):
         return new Time_Frame();
      case('calendar'):
         return new Calendar_Frame();
      case('stopwatch'):
         return new Stopwatch_Frame();
      // case('timer'):
      //    return new Timer_Frame();
      default:
         return new Time_Frame();
   }
   
}