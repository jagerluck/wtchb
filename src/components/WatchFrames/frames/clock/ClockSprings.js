import { connect } from 'react-redux';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { getSpringsPos, stopwatchKeyframes } from './getSpringsPos.js';


const HourSpring = styled.div`
   display: flex,
   transform-origin: bottom;
   justify-content: center;
   align-items: flex-end;
   width: 8px;
   height: 80px;
   border-radius: 6px;
   background: var(--hour-hand);
   box-shadow: 1px 2px 9px rgb(31, 31, 31);
   animation: 43200s linear ${(props) => props.movehourhands} infinite;
   animation-play-state: ${(props) => props.action};
`;
   
const MinuteSpring = styled.div`
   display: flex;
   transform-origin: bottom;
   justify-content: center;
   align-items: flex-end;
   width: 4px;
   height: 110px;
   border-radius: 4px;
   background: var(--minute-hand);
   animation: 3600s linear ${(props) => props.moveminhands} infinite;
   animation-play-state: ${(props) => props.action};
`;

const SecondSpring = styled.div`
   width: 1px;
   transform-origin: bottom;
   height: 140px;
   background: var(--sec-hand);
   animation: 60s linear ${(props) => props.movesechands} infinite;
   animation-play-state: ${(props) => props.action};
`;


const ClockSprings = (props) => {
   let { frame, action } = props;
   // how to add reset functionality...
   const { movesechands, moveminhands, movehourhands } = stopwatchKeyframes(keyframes);
   let springsMap = new WeakMap([
   [
         { hour: 'hour' },
         <HourSpring movehourhands={movehourhands} action={action} />,
      ],
      [
         { min: 'minutes' },
         <MinuteSpring moveminhands={moveminhands} action={action} />,
      ],
      [
         { sec: 'seconds' },
         <SecondSpring movesechands={movesechands} action={action} />,
      ],
   ]);

   React.useEffect(() => {
      
      <HourSpring movehourhands={movehourhands} action={action} />;
   }, [action])

   return (
      <div className="clock-springs">
         <div className="clock-springs__central"></div>
         <div className="clock-springs__hour">
            <HourSpring movehourhands={movehourhands} action={action} />
         </div>
         <div className="clock-springs__minute">
            <MinuteSpring moveminhands={moveminhands} action={action} />
         </div>
         <div className="clock-springs__second">
            <SecondSpring movesechands={movesechands} action={action} />
         </div>
      </div>
   );
}


const mapState = (props) => {
   const { frameStatusReducer, frameReducer } = props;
   return {
      frame: frameReducer.currentFrame,
      action: frameStatusReducer.action,
   };
};

export default connect(mapState, null)(ClockSprings);