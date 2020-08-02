import React from 'react'
import styled, { keyframes } from 'styled-components'


export function Time_Frame() {
   let date = new Date();
   // watch ticks with help of css transform degrees
   let hour = date.getHours() * 30;
   let min = date.getMinutes() * 6;
   let sec = date.getSeconds() * 6;
   let adjmin = sec / 60;
   let adjhour = min / 12;

   let movesechands = keyframes`
      @keyframes movesechands {
         from {
            transform: rotate(${sec}deg);
         }
         to {
            transform: rotate(${sec + 360}deg);
         }
      }`;
   let moveminhands = keyframes`
      @keyframes moveminhands {
         from {
            transform: rotate(${min + adjmin}deg);
         }
         to {
            transform: rotate(${min + 360 + adjmin}deg);
         }
      }`;
   let movehourhands = keyframes`
      @keyframes movehourhands {
         from {
            transform: rotate(${hour + adjhour}deg);
         }
         to {
            transform: rotate(${hour + 360 + adjhour}deg);
         }
      }`;

   // div - sc.
   // const Spring_sec = styled.div`
   //    display: flex;
   //    justify-content: center;
   //    align-items: flex-end;   
   //    width: 1px;
   //    height: 140px;
   //    background-color: rgb(255, 46, 46);
   //    animation: 60s linear ${move_springs.movesechands} infinite;`
   
   // const Spring_min = styled.div`
   //    display: flex;
   //    justify-content: center;
   //    align-items: flex-end;
   //    width: 4px;
   //    height: 110px;
   //    border-radius: 4px;
   //    background: var(--minute-hand);
   //    animation: 3600s linear ${move_springs.moveminhands} infinite;`

      // const Spring_hour = styled.div`
      //    display: flex;
      //    justify-content: center;
      //    align-items: flex-end;
      //    width: 4px;
      //    height: 110px;
      //    border-radius: 4px;
      //    background: var(--minute-hand);
      //    animation: 3600s linear ${move_springs.movehourhands} infinite;`
      

      // how to ebanle the animations sklafhdesjhfd;h
      let springsStyles = {
         hr: {
            display: `flex`,
            justifyContent: `center`,
            alignItems: `flex-end`,
            width: `8px`,
            height: `80px`,
            borderRadius: `6px`,
            background: `var(--hour-hand)`,
            boxShadow: `1px 2px 9px rgb(31, 31, 31)`,
            animation: `216000s linear ${movehourhands} infinite`,
         },
         mn: {
            display: `flex`,
            justifyContent: `center`,
            alignItems: `flex-end`,
            width: `4px`,
            height: `110px`,
            borderRadius: `4px`,
            background: `var(--minute-hand)`,
            animation: `3600s linear moveminhands infinite`,
         },
         sc: {
            width: `1px`,
            height: `140px`,
            background: `var(--sec-hand)`,
            animation: `60s linear movesechands infinite`,
         }
      }

      // background: `var(--minute-hand)`,
      // background: `var(--sec-hand)`,
      // background: `var(--hour-hand)`,
      console.log('debugg');

      
      const hr = <div className="hr" style={springsStyles.hr}></div>
      const mn = <div className="mn" style={springsStyles.mn}></div>
      const sc = <div className="sc" style={springsStyles.sc}></div>
      // const spring_hour = `216000s linear movehourhands infinite`
      // const spring_min = `3600s linear moveminhands infinite`
      // const spring_sc = `60s linear movesechands infinite`
      // const hr = <div className="hr" style={{ animation: spring_hour }}></div>
      // const mn = <div className="mn" style={{ animation: spring_min }}></div>
      // const sc = <div className="sc" style={{ animation: spring_sc }}></div>
      
      
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
   
   // let elements = create(2, 180, 0, -165, 165) - for some reasons these values differ from those in vanilla js
   
   // make custom props for delimeters
   let elements = create(2, 180, 165, 0, 165)
   
   return (
      <div className="app-frames">
         <div className="clock-frame">
            <div className="scale-container" id="timenow">
               <div className="scale-delimeters">
                  {elements}
               </div>
               <div className="layout">
                  <span className="clock-number-12">12</span>
                  <span className="clock-number-3">3</span>
                  <span className="clock-number-6">6</span>
                  <span className="clock-number-9">9</span>
               </div>
               <div className="clock-movement">
                  <div className="central-spring"></div>
                  <div className="hour">
                     {hr}
                  </div>
                  <div className="minute">
                     {mn}
                  </div>
                  <div className="second">
                     {sc}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}