import { connect } from 'react-redux';
import React from 'react';

import { changeFrameStatus } from 'redux/actions.js';
import { showFrame, CANCEL } from 'redux/actions.js';


const RotatedOption = (props) => {
   const {
      showFrame,
      innText,
      frame,
      position,
      rotated,
      changeFrameStatus,
      controls,
   } = props;
   const [rotatingClass, setRotatingClass] = React.useState('menu__option');

   const toggleFrame = (frame, cancel = false) => { 
      // check if something was in active state (rotated)
      if (rotated && !cancel) return alert('Cancel current element!');
      rotatingClass === 'menu__option' ? 
         setRotatingClass('menu__option--rotated')
         : setRotatingClass('menu__option');
      return cancel ? showFrame(CANCEL) : showFrame(frame);
   };

   const controlsMap = !controls
      ? ''
      : controls.map((el) => (
           <button
              key={el.name}
              className="menu__btn--back"
              onClick={(e) => control(e, el.option)}
           >
              {el.name}
           </button>
        ));
   
   const control = (e, type) => {
      e.preventDefault();
      changeFrameStatus(type);
   };

   return (
      <div className={rotatingClass + position}>
         <div className="menu__option--front">
            <button className="menu__btn" onClick={() => toggleFrame(frame)}>
               {innText}
            </button>
         </div>
         <div className="menu__option--top"></div>
         <div className="menu__option--bottom"></div>
         <div className="menu__option--back">
            {controlsMap}
            <button
               className="menu__btn--back"
               onClick={() => toggleFrame(frame, true)}
            >
               Cancel
            </button>
         </div>
      </div>
   );
}



export default connect(
   null, 
   { changeFrameStatus, showFrame }
)(RotatedOption);