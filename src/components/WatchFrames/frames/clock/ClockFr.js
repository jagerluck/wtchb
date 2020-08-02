import React from 'react'
import { ClockSprings } from './ClockSprings.js'


export function ClockFr(props) {
   let { delimeters } = props

   console.log('working');
   // watch ticks with help of css transform degrees

   // change for timer, stopwatch etc
   let functionality = 'time'

   return (
      <div className="clock-frame">
         <div className="scale-container" id="timenow">
            <div className="scale-delimeters">
               {delimeters}
            </div>
            <div className="layout">
               <span className="clock-number-12">12</span>
               <span className="clock-number-3">3</span>
               <span className="clock-number-6">6</span>
               <span className="clock-number-9">9</span>
            </div>
            <ClockSprings functionality={functionality}/>
         </div>
      </div>
   )
}