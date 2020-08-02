import React from 'react'
import { connect } from 'react-redux'
import { showFrame } from '../../redux/actions.js'

// function mapDispatchToProps(dispatch) {
//    return {
//       changeFrame: frame => dispatch(changeFrame(frame))
//    };
// }

function RotatingOption(props) {
   let { opt, isRotating, innText } = props;

   let showFr = (frame) => {
      return props.showFrame(frame)
   }

   // 1st option to create rotating element
   // 2nd is for common options
   return isRotating === true ?
   (
   <div className="watch-opt-rotate" id={opt}>
      <div className={opt+"__front"}>
         <button className="change-clock">{innText}</button>
      </div>
      <div className={opt+"__top"}></div>
      <div className={opt+"__bottom"}></div>
      <div className={opt+"__back"}>
         <button className={"btn-stop-"+opt}>Stop</button>
         <button className={"btn-start-"+opt}>Start</button>
         <button className={"btn-start-"+opt}>Cancel</button>
      </div>
   </div>
   ) : 
      (<div className={opt}><button className="change-clock bottom-border" onClick={() => showFr('TIME')}>{innText}</button></div>)
      // for some reason I need to call onClick={(need to create this self invoked type of function) => function to call}
}


export default connect(
   null,
   { showFrame }
)(RotatingOption)