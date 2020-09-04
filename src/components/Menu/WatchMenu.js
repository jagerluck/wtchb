import MenuOption from './MenuOption.js'
import React, { useRef } from 'react'
import { TIME, TIMER, STOPWATCH, CALENDAR } from '../../redux/actions.js'




const options = [
   {
      opt: "TIME",
      innerText: "Current Time",
      isRotating: false,
   },
   {
      opt: "STOPWATCH",
      innerText: "Stopwatch",
      isRotating: true,
   },
   {
      opt: "TIMER",
      innerText: "Timer",
      isRotating: true,
   },
   {
      opt: "CALENDAR",
      innerText: "Calendar",
      isRotating: false,
   },
]


export function WatchMenu() {

   const rotatedOption = useRef({
      isRotated: false,
      element: ''
   });

   let optionsMap = options.map((el, i) => {
      return (
         <MenuOption
            rotatedOption={rotatedOption}
            key={i + 2000}
            isRotating={el.isRotating}
            opt={el.opt}
            innText={el.innerText}
            position={
               i === 0
                  ? 'top-border'
                  : i === options.length - 1
                  ? 'bottom-border'
                  : 'intermediate'
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