import { connect } from 'react-redux';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TIME, STOPWATCH, RUNNING, PAUSED, RESET } from 'redux/actions.js';

import { getSpringsPos } from './getSpringsPos.js';



const HourSpring = styled.div`
   display: flex;
   transform-origin: bottom;
   justify-content: center;
   align-items: flex-end;
   width: 8px;
   height: 80px;
   border-radius: 6px;
   background: var(--hour-hand);
   box-shadow: 1px 2px 9px rgb(31, 31, 31);
   animation: 43200s linear ${(props) => props.movehourhands} infinite;
   animation-play-state: ${(props) => props.playState};
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
   animation-play-state: ${(props) => props.playState};
`;

const SecondSpring = styled.div`
   width: 1px;
   transform-origin: bottom;
   height: 140px;
   background: var(--sec-hand);
   animation: 60s linear ${(props) => props.movesechands} infinite;
   animation-play-state: ${(props) => props.playState};
`;



const ClockSprings = (props) => {
   let { frame, playState } = props;
   console.log(props)
   const { movesechands, moveminhands, movehourhands } = getSpringsPos(frame, keyframes);

   return (
      <div className="clock-springs">
         <div className="clock-springs__central"></div>
         <div className="clock-springs__hour">
            <HourSpring
               movehourhands={movehourhands}
               playState={playState}
            />
         </div>
         <div className="clock-springs__minute">
            <MinuteSpring
               moveminhands={moveminhands}
               playState={playState}
            />
         </div>
         <div className="clock-springs__second">
            <SecondSpring
               movesechands={movesechands}
               playState={playState}
            />
         </div>
      </div>
   );
}


const mapState = (props) => {
   const { frameStatusReducer, frameReducer } = props;

   return {
      frame: frameReducer.currentFrame,
      playState: (frameStatusReducer.type == null) ?
         frameReducer.currentFrame === TIME
            ? (frameStatusReducer.type = RUNNING)
            : (frameStatusReducer.type = PAUSED)
         : frameStatusReducer.type,
   };
};

export default connect(mapState, null)(ClockSprings);