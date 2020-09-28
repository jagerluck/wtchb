import { connect } from 'react-redux';
import React from 'react';

import { changeFrameStatus } from 'redux/actions.js';


function RotatedOption(props) {
   const {
      showFrame,
      innText,
      frame,
      position,
      rotated,
      changeFrameStatus,
      adjs,
   } = props;
   const [rotatingClass, setRotatingClass] = React.useState('menu__option');

   const triggerFrame = (frame, cancel = false) => {
      // check if something was in active state (rotated)
      if (rotated && !cancel) return alert('Cancel current element!');
      rotatingClass === 'menu__option' ? 
         setRotatingClass('menu__option--rotated')
         : setRotatingClass('menu__option');
      return cancel ? showFrame('another') : showFrame(frame);
   };

   const adjsMap = !adjs ? '' :
   adjs.map((el) => (
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
      // here should be the time state
      return changeFrameStatus(type);
   };

   return (
      <div className={rotatingClass + position}>
         <div className="menu__option--front">
            <button className="menu__btn" onClick={() => triggerFrame(frame)}>
               {innText}
            </button>
         </div>
         <div className="menu__option--top"></div>
         <div className="menu__option--bottom"></div>
         <div className="menu__option--back">
            {adjsMap}
            <button
               className="menu__btn--back"
               onClick={() => triggerFrame(frame, true)}
            >
               Cancel
            </button>
         </div>
      </div>
   );
}



export default connect(null, { changeFrameStatus })(RotatedOption);