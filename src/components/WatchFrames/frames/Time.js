import React from 'react'
import styled, { keyframes } from 'styled-components'


export function Time_Frame() {
   console.log('something was created inside a Time_Frame');
   
   let date = new Date();
   // watch ticks with help of css transform degrees
   let hour = date.getHours() * 30;
   let min = date.getMinutes() * 6;
   let sec = date.getSeconds() * 6;
   let adjmin = sec / 60;
   let adjhour = min / 12;

   let move_springs = {
      movesechands: keyframes`
      @keyframes movesechands {
         from {
            transform: rotate(${sec}deg);
         }
         to {
            transform: rotate(${sec + 360}deg);
         }
      }`,
      moveminhands: keyframes`
      @keyframes moveminhands {
         from {
            transform: rotate(${min + adjmin}deg);
         }
         to {
            transform: rotate(${min + 360 + adjmin}deg);
         }
      }`,
      movehourhands: keyframes`
      @keyframes movehourhands {
         from {
            transform: rotate(${hour + adjhour}deg);
         }
         to {
            transform: rotate(${hour + 360 + adjhour}deg);
         }
      }`
   }

   // div - sc.
   const Spring_sec = styled.div`
      display: flex;
      justify-content: center;
      align-items: flex-end;   
      width: 1px;
      height: 140px;
      background-color: rgb(255, 46, 46);
      animation: 60s linear ${move_springs.movesechands} infinite;`
   
   const Spring_min = styled.div`
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 4px;
      height: 110px;
      border-radius: 4px;
      background: var(--minute-hand);
      animation: 3600s linear ${move_springs.moveminhands} infinite;`

   const Spring_hour = styled.div`
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 4px;
      height: 110px;
      border-radius: 4px;
      background: var(--minute-hand);
      animation: 3600s linear ${move_springs.movehourhands} infinite;`

   const parent_frame = document.createElement('div')
   parent_frame.className = '.app-frames'

   function create(angle, amount_of_delimeters, startX, startY, hypotenuse) {
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
            let basicStyles = `
               position: absolute;
               opacity: 1;
               transform: translateY(${trVal.trY()}px) 
                          translateX(${ trVal.trX() }px)
                          rotate(${trVal.el_angle}deg);
               transform-origin: top;
            `
            if (i % big_delim === 0) {
               spans[i] = styled.span`
                  height: 15px;
                  margin-left: -1px;
                  width: 2px;
                  background-color: rgb(168, 168, 168);
                  ${basicStyles}
               `
            } else {
               spans[i] = styled.span`
                  width: 1px;
                  height: 6px;
                  background-color: rgb(92, 92, 92);
                  ${basicStyles}
               `
            }
            trVal.el_angle += angle
         }
         return spans
      }

      return createScaleSpans()
   }

   // make custom props for delimeters
   let elements = create(2, 180, 0, -165, 165)
   console.log(elements)

   return (
      <div className="app-frames">
         <div className="clock-frame">
            <div class="scale-container" id="timenow">
               <div class="scale-delimeters">
                  {elements}
               </div>
               <div class="layout">
                  <span class="clock-number-12">12</span>
                  <span class="clock-number-3">3</span>
                  <span class="clock-number-6">6</span>
                  <span class="clock-number-9">9</span>
               </div>
               <div class="clock-movement">
                  <div class="central-spring"></div>
                  <div class="hour">
                     <Spring_hour />
                  </div>
                  <div class="minute">
                     <Spring_min />
                  </div>
                  <div class="second">
                     <Spring_sec />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
