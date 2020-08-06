import React from 'react'
import styled from 'styled-components'



class ClockSprings extends React.Component {   
   


   render() {
      // it causes the "styled-components" warning in console. I don't think passing props to each spring is good idea
      let Springs = styled.div`${this.props.springsPositions}`
   
      return (
         <Springs className="clock-springs">
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
      )
   }
}


export default ClockSprings