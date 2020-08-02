import React from 'react'
import { ClockFr } from './clock/ClockFr.js'


export function Time_Frame() {

   function createDelimeters(angle, amount_of_delimeters, startX, startY, hypotenuse) {
      let trVal = {
         hypse: hypotenuse,
         el_angle: 0,
         startY: startY,
         startX: startX,
         cathAngl() { return (180 - this.el_angle) / 2 },
         // needed for built-in Math.sin(cos) function
         toRad(angleA = this.el_angle / 2) { return angleA * Math.PI / 180 },
         // straight line between measure units in watch scale. Needed to provide, since it'd be a hypotenuse of sought-for lines(translateX and translateY values).
         tang() { return Math.sin(this.toRad()) * this.hypse * 2 },
         // final 'translate' values. Now we know hypotenuse of the triangle, so we could find cathets (needed values for translate func) X(0) -> X(1), as well as Y(0) -> Y(1).
         trX() { return this.startX + this.tang() * (Math.sin(this.toRad(this.cathAngl()))) },
         trY() { return this.startY + this.tang() * (Math.cos(this.toRad(this.cathAngl()))) },
      }
      
      function createScaleSpans() {
         let spans = new Array(amount_of_delimeters)
         const big_delim = amount_of_delimeters / 12
         
         for (let i = 0; i < amount_of_delimeters; i++) {
            let transformation = `
            translateY(${trVal.trY()}px) 
            translateX(${ trVal.trX() }px)
            rotate(${trVal.el_angle}deg)
            `
            if (i % big_delim === 0) {
               spans.push(<span className="big-delimeter" style={{transform: transformation}} key={i + 100}/>)
            } else {
               spans.push(<span className="small-delimeter" style={{transform: transformation}} key={i + 100}/>)
            }
            trVal.el_angle += angle
         }
         return spans
      }

      return createScaleSpans()
   }

   
   // make custom props for delimeters
   const delimeters = createDelimeters(2, 180, 165, 0, 165)

   return (
      <div className="app-frames">
         <ClockFr delimeters={delimeters} />
      </div>
   )
}