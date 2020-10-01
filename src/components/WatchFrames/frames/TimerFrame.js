import { CANCEL, RUNNING, PAUSED, RESET } from 'redux/actions.js';
import { connect } from 'react-redux';
import React from 'react';

import Timer from 'react-compound-timer';



function TimerFrame(props) {
   const { status } = props;
   console.log(props, status)

   return (
      <Timer
         startImmediately={false}
         //formatValue={(value) => `${value < 10 ? `0${value}` : value} units `}
      >
         {({ start, stop, resume, reset, pause, timerState }) => {
            switch (status) {
               case RUNNING:
                  console.log('before start')
                  start();
                  break;
               case RESET:
                  reset();
                  break;
               case PAUSED:
                  pause();
                  break;
               default:
                  break;
            }
            return (
            <>
               <Timer.Hours formatValue={(value) => `${value} hours. `} />
               <Timer.Minutes formatValue={(value) => `${value} minutes.`} />
               <Timer.Seconds formatValue={(value) => `${value} seconds. `} />
            </>
            )}
         }
      </Timer>
   );
}


function mapState(props) {
   const { frameStatusReducer } = props;
   return {status: frameStatusReducer.type};
}


export default connect(mapState, null)(TimerFrame);