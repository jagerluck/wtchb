import React from 'react'
import { CreateDelimeters } from './clock/CreateDelimeters.js';
import ClockSprings from './clock/ClockSprings.js'
import { springsPos } from './clock/springsPos.js'
import { connect } from 'react-redux';


// watch ticks with help of css transform degrees
function ClockCanvas(props) {   
   const delimeters = CreateDelimeters(2, 180, 165, 0, 165);
   let { functionality, frameStatusReducer : { status } } = props; 

   let springsStPos;
   switch(functionality) {
      case 'stopwatch':
         springsStPos = springsPos('stopwatch');
         break;
      case 'time':
         springsStPos = springsPos('time');
         break;
      default:
         springsStPos = springsPos('stopwatch');
   }

   return (
      <div className="scale-container" id="timenow">
         <div className="scale-delimeters">{delimeters}</div>
         <div className="clock-numbers">
            <span className="clock-numbers__12">12</span>
            <span className="clock-numbers__3">3</span>
            <span className="clock-numbers__6">6</span>
            <span className="clock-numbers__9">9</span>
         </div>
         <ClockSprings
            springsStPos={springsStPos}
            functionality={functionality}
         />
      </div>
   );
}

function mapState(props) {
   let { frameStatusReducer } = props;
   return { frameStatusReducer };
}

export default connect(
   mapState, null
)(ClockCanvas)