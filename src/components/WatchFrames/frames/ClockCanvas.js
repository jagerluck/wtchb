import { connect } from 'react-redux';
import React from 'react';
import { CreateDelimeters } from './clock/CreateDelimeters.js';
import ClockSprings from './clock/ClockSprings.js';



// watch ticks with help of css transform degrees
function ClockCanvas(props) {   
   const delimeters = CreateDelimeters(2, 180, 165, 0, 165);
   const { frame } = props;

   return (
      <div className="scale-container" id="timenow">
         <div className="scale-delimeters">{delimeters}</div>
         <div className="clock-numbers">
            <span className="clock-numbers__12">12</span>
            <span className="clock-numbers__3">3</span>
            <span className="clock-numbers__6">6</span>
            <span className="clock-numbers__9">9</span>
         </div>
         <ClockSprings frame={frame} />
      </div>
   );
}

const mapState = (props) => {
   const { frameStatusReducer, frameReducer } = props;
   return {
      action: frameStatusReducer.action,
      frame: frameReducer.currentFrame,
   };
};

export default connect(mapState, null)(ClockCanvas);