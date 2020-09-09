import React from 'react';
import { connect } from 'react-redux';
import { showFrameStatus } from 'redux/actions.js'



function RotatedOption(props) {
   let { showFrame, innText, frame, position, rotatedSt } = props;
   let [rotatingClass, setRotatingClass] = React.useState('menu__option');

   let triggerFrame = (frame, rotateOpt, cancel = false) => {
      // check if something was in active state (rotated)
      if (rotatedSt && cancel === false)
         return alert('Cancel current element!');
      if (rotateOpt) {
         rotatingClass === 'menu__option '
            ? setRotatingClass('menu__option--rotated')
            : setRotatingClass('menu__option');
      }
      return showFrame(frame, rotateOpt);
   };
   
   let run = (e) => {
      e.preventDefault();
      interactTime('run');
   };

   let stop = (e) => {
      e.preventDefault();
      interactTime('stop');
   };


   return (
      <div className={rotatingClass + position}>
         <div className="menu__option--front">
            <button
               className="menu__btn"
               onClick={() => triggerFrame(frame, true)}
            >
               {innText}
            </button>
         </div>
         <div className="menu__option--top"></div>
         <div className="menu__option--bottom"></div>
         <div className="menu__option--back">
            <button className="menu__btn--back" onClick={stop}>
               Stop
            </button>
            <button className="menu__btn--back" onClick={run}>
               Start
            </button>
            <button
               className="menu__btn--back"
               onClick={() => triggerFrame(frame, true, true)}
            >
               Cancel
            </button>
         </div>
      </div>
   );
}


export default connect(null, { showFrameStatus })(RotatedOption);