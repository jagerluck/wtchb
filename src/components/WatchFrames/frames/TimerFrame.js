import Timer from 'react-compound-timer';
import React from 'react';
import { connect } from 'react-redux';



function TimerFrame(props) {
   let { status } = props;

   return (
      <Timer
         startImmediately={false}
         //formatValue={(value) => `${value < 10 ? `0${value}` : value} units `}
      >
         {({ start, stop, resume, reset, pause, timerState }) => {
            switch (status) {
               case 'run':
                  start();
                  break;
               case 'reset':
                  reset();
                  break;
               case 'pause':
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


function showFrameStatus(props) {
   const { frameStatusReducer } = props;
   return {status: frameStatusReducer.status};
}


export default connect(
   showFrameStatus,
   null
)(TimerFrame)