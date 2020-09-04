import React from 'react'
import { connect } from 'react-redux'
import { showFrame } from '../../redux/actions.js'


// function mapDispatchToProps(dispatch) {
//    return {
//       changeFrame: frame => dispatch(changeFrame(frame))
//    };
// }

function MenuOption(props) {
   let { opt, isRotating, innText, position, rotatedOption, showFrame } = props;
   let rotatingClass = "menu__option"

   let showFr = (frame, rotate) => {
      return props.showFrame(frame, rotate)
   }

   let start = (e) => {
      e.preventDefault();
   }

   let stop = (e) => {
      e.preventDefault();
   }

   let triggerFrAndRotate = (e, frame, rotate) => {
      return props.showFrame(frame, rotate)
   }

   let captureTrigger = (e) => {
      let ct = e.currentTarget
      ct.className == rotatingClass ? ct.className += '--rotated' : ct.className = rotatingClass
   }

   
   return isRotating === true ?
      (<div className="menu__option" onClickCapture={captureTrigger}>
         <div className="menu__option--front">
            <button className="menu__btn" onClick={(e) => triggerFrAndRotate(e, opt, true)}>{innText}</button>
         </div>
         <div className="menu__option--top"></div>
         <div className="menu__option--bottom"></div>
         <div className="menu__option--back">
            <button className="menu__btn--back" onClick={stop}>Stop</button>
            <button className="menu__btn--back" onClick={start}>Start</button>
            <button className="menu__btn--back" onClick={(e) => triggerFrAndRotate(e, opt, true)}>Cancel</button>
         </div>
      </div>
      ) : 
      (<div className="menu__option"><button className={"menu__btn "+position} onClick={() => showFr('TIME', false)}>{innText}</button></div>)
}






const mapStateToProps = state => ({ rotate: state.rotate, blocked: state.blocked() })


export default connect(
   mapStateToProps,
   { showFrame }
)(MenuOption)



// issues 
// error in console
// showFr function is called with the same type, but need to use different
// think is it a good idea to keep all the logic here, or better to store it in initial component
// a lot of functions