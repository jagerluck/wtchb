import MenuOption from './MenuOption.js'
import React from 'react'
import { TIME, TIMER, STOPWATCH, CALENDAR } from '../../redux/actions.js'




const options = [
   {
      opt: "TIME",
      innerText: "Current Time",
      isRotating: false,
   },
   {
      opt: "stopwatch",
      innerText: "Stopwatch",
      isRotating: true,
   },
   {
      opt: "timer",
      innerText: "Timer",
      isRotating: true,
   },
   {
      opt: "calendar",
      innerText: "Calendar",
      isRotating: false,
   },
]


export function WatchMenu() {

   let optionsMap = options.map((el, i) => {
      return <MenuOption key={i + 2000} isRotating={el.isRotating} opt={el.opt} innText={el.innerText} position={i === 0 ? 'top-border' : i === options.length - 1 ? 'bottom-border' : 'intermediate'}/>
   })

   return ( 
      <div className="menu">
         {optionsMap}
      </div>
   )
}