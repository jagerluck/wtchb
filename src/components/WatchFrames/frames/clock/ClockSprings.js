import React from 'react';
import styled from 'styled-components';


function ClockSprings(props) {
   let Springs = styled.div`
      ${(props) => props.springsStPos}
   `;
   
   return (
      <Springs
         className="clock-springs"
         springsPos={props.springsPos}
      >
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
      </Springs>
   );
}


export default ClockSprings;