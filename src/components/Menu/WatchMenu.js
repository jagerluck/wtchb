import MenuOption from './MenuOption.js'
import React from 'react'
import { TIME, TIMER, STOPWATCH, CALENDAR } from 'redux/actions.js';




const options = [
   {
      frame: TIME,
      innerText: 'Current Time',
      isRotating: false,
   },
   {
      frame: STOPWATCH,
      innerText: 'Stopwatch',
      isRotating: true,
   },
   {
      frame: TIMER,
      innerText: 'Timer',
      isRotating: true,
   },
   {
      frame: CALENDAR,
      innerText: 'Calendar',
      isRotating: false,
   },
];


export function WatchMenu() {

   let optionsMap = options.map((el, i) => {
      return (
         <MenuOption
            key={i + 2000}
            isRotating={el.isRotating}
            frame={el.frame}
            innText={el.innerText}
            position={
               i === 0
                  ? ' top-border'
                  : i === options.length - 1
                  ? ' bottom-border'
                  : ' intermediate'
            }
         />
      );
   })

   return ( 
      <div className="menu">
         {optionsMap}
      </div>
   )
}