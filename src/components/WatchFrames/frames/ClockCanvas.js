import React from 'react'
import { createDelimeters } from './clock/createDelimeters.js'
import ClockSprings from './clock/ClockSprings.js'
import { springsPos } from './clock/springsPos.js'


// watch ticks with help of css transform degrees
export function ClockCanvas(props) {   
   const delimeters = createDelimeters(2, 180, 165, 0, 165)

   let { functionality } = props 
   // change for timer, stopwatch etc
   let movable = false


   return (
      <div className="scale-container" id="timenow">
         <div className="scale-delimeters">
            {delimeters}
         </div>
         <div className="clock-numbers">
            <span className="clock-numbers__12">12</span>
            <span className="clock-numbers__3">3</span>
            <span className="clock-numbers__6">6</span>
            <span className="clock-numbers__9">9</span>
         </div>
         <ClockSprings springsPositions={springsPos(functionality, movable)} />
      </div>
   )
}

