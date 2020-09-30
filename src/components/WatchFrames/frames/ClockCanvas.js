import React from 'react';
import { CreateDelimeters } from './clock/CreateDelimeters.js';
import ClockSprings from './clock/ClockSprings.js';



// watch ticks with help of css transform degrees
function ClockCanvas(...props) {   
   const delimeters = CreateDelimeters(2, 180, 165, 0, 165);

   return (
      <div className="scale-container" id="timenow">
         <div className="scale-delimeters">{delimeters}</div>
         <div className="clock-numbers">
            <span className="clock-numbers__12">12</span>
            <span className="clock-numbers__3">3</span>
            <span className="clock-numbers__6">6</span>
            <span className="clock-numbers__9">9</span>
         </div>
         <ClockSprings props={props} />
      </div>
   );
}

export default ClockCanvas;