import { RotatingOption } from './RotatingOption.js'
import React from 'react'


const options = [
   {
      opt: "time",
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

   let optionsMap = options.map(el => <RotatingOption isRotating={el.isRotating} className="watch-opt-rotate" opt={el.opt} innText={el.innerText} />)

   return ( 
      <div className="change-watch-opt">
         {optionsMap}
      </div>
   )
}