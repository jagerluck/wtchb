import React from 'react'
import styled from 'styled-components'





class ClockSprings extends React.Component {
   constructor(props) {
      super();
   }

   shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.functionality == this.props.functionality) return false;
      return true;
   }
   
   render() {
      // it causes the "styled-components" warning in console. I don't think passing props to each spring is good idea
      // upd: probably another component
      let Springs = styled.div`
         ${(props) => props.springsStPos}
      `;

      return (
         <Springs
            className="clock-springs"
            springsStPos={this.props.springsStPos}
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
}

export default ClockSprings