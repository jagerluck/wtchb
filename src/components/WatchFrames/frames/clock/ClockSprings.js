import { connect } from 'react-redux';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TIME, STOPWATCH, RUNNING, PAUSED, RESET } from 'redux/actions.js';

import { SpringsKeyframes } from './SpringsKeyframes.js';



const HourSpring = styled.div`
   display: flex;
   transform: rotate(${(props) => props.hour + props.adjhour}deg);
   transform-origin: bottom;
   justify-content: center;
   align-items: flex-end;
   width: 8px;
   height: 80px;
   border-radius: 6px;
   background: var(--hour-hand);
   box-shadow: 1px 2px 9px rgb(31, 31, 31);
   transform: rotate();
   animation: 43200s linear ${(props) => props.movehourhands} infinite;
   animation-play-state: ${(props) => props.playState};
`;

const MinuteSpring = styled.div`
   display: flex;
   transform: rotate(${(props) => props.min + props.adjmin}deg);
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
   transform: rotate(${(props) => props.sec}deg);
   transform-origin: bottom;
   height: 140px;
   background: var(--sec-hand);
   animation: 60s linear ${(props) => props.movesechands} infinite;
   animation-play-state: ${(props) => props.playState};
`;



const ClockSprings = (props) => {
   let { frame, playState } = props;
   const {
      movesechands,
      moveminhands,
      movehourhands,
      hour,
      min,
      sec,
      adjmin,
      adjhour,
   } = playState === RESET ? SpringsKeyframes(RESET) : SpringsKeyframes(frame);

   return (
      <div className="clock-springs">
         <div className="clock-springs__central"></div>
         <div className="clock-springs__hour">
            <HourSpring
               playState={playState}
               movehourhands={movehourhands}
               hour={hour}
               adjhour={adjhour}
            />
         </div>
         <div className="clock-springs__minute">
            <MinuteSpring
               playState={playState}
               moveminhands={moveminhands}
               min={min}
               adjmin={adjmin}
            />
         </div>
         <div className="clock-springs__second">
            <SecondSpring
               playState={playState}
               movesechands={movesechands}
               sec={sec}
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