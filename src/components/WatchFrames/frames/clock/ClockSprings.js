import React from 'react';
// do I need to use just keyframes
import styled from 'styled-components';
import { getSpringsPos } from './getSpringsPos.js';


function ClockSprings(props) {
   const { frame } = props;
   // const Springs = styled.div`${springsPos}`;
   // const springsPos = getSpringsPos(frame);
   
   const springsPos = getSpringsPos(frame);

   return (
      // <Springs className="clock-springs" style={style}>
      <div className="clock-springs" style={{style}}>
         <div className="clock-springs__central"></div>
         <div className="clock-springs__hour">
            <div className="clock-springs__hour--"></div>
         </div>
         <div className="clock-springs__minute">
            <div className="clock-springs__minute--"></div>
         </div>
         <div className="clock-springs__second">
            <div className="clock-springs__second--"></div>
         </div>
      </div>
   );
}


const hourSpring = {
   display: 'flex',
   transformOrigin: 'bottom';
   justifyContent: 'center',
   alignItems: 'flex-end',
   width: '8px',
   height: '80px',
   borderRadius: '6px',
   background: 'var(--hour-hand)',
   boxShadow: '1px 2px 9px rgb(31, 31, 31)',
   animation: '43200s linear movehourhands infinite',
}

const minuteSpring = {
   display: 'flex',
   transformOrigin: 'bottom',
   justifyContent: 'center',
   alignItems: 'flex-end',
   width: '4px',
   height: '110px',
   borderRadius: '4px',
   background: 'var(--minute-hand)',
   animation: '3600s linear moveminhands infinite',
}

const secondSpring = {
   width: '1px',
   transformOrigin: 'bottom',
   height: '140px',
   background: 'var(--sec-hand)',
   animation: '60s linear movesechands infinite',
}



export default ClockSprings;