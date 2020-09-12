import React from 'react'
import styled from 'styled-components'




// it causes the "styled-components" warning in console. I don't think passing props to each spring is good idea
// upd: probably another component
let Springs = styled.div`${props => props.springsPositions}`

   
function ClockSprings(props) {
   return (
      <Springs
         className="clock-springs"
         springsPositions={props.springsPositions}
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

export default ClockSprings