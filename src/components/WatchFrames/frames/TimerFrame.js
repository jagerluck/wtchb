import Timer from 'react-compound-timer';
import React from 'react';
import { connect } from 'react-redux';



function TimerFrame(props) {
   let { status } = props;
   let [ statusTimer, setStatusTimer ] = React.useState('start')
   console.log(props)

   return (
      <Timer
      //formatValue={(value) => `${value < 10 ? `0${value}` : value} units `}
      >
         {({ start, resume, pause, timerState }) => (
            <>
               <div>{timerState}</div>
               <Timer.Hours formatValue={(value) => `${value} hours. `} />
               <Timer.Minutes formatValue={(value) => `${value} minutes.`} />
               <Timer.Seconds
                  formatValue={(value) => `${value} seconds. `}
               />
            </>
         )}
      </Timer>
   );
}



export default connect(
   () => ({ status }),
   null
)(TimerFrame)