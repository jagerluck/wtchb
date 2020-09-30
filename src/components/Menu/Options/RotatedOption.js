import { connect } from 'react-redux';
import React from 'react';

import { changeFrameStatus, showFrame, CANCEL } from 'redux/actions.js';


const RotatedOption = (props) => {
   const {
      showFrame,
      innText,
      frame,
      position,
      changeFrameStatus,
      controls,
   } = props;
   const [rotatingClass, setRotatingClass] = React.useState('menu__option');

   const toggleFrame = (e) => { 
      rotatingClass === 'menu__option'
      ? setRotatingClass('menu__option--rotated')
      : setRotatingClass('menu__option');
      e.target.innerText === CANCEL ? showFrame(CANCEL) : showFrame(frame);
   };
   
   const control = (e) => {
      e.preventDefault();
      const { playstate } = e.target.dataset;
      changeFrameStatus(playstate);
   } 

   const controlsMap = !controls
      ? ''
      : controls.map((el) => (
           <button
              key={el.name}
              className="menu__btn--back"
              /* instead of calling function(some params) */
              {...{ 'data-playstate': el.option }}
              onClick={control}
           >
              {el.name}
           </button>
        ));

   return (
      <div className={rotatingClass + position}>
         <div className="menu__option--front">
            <button
               className="menu__btn"
               onClick={toggleFrame}
            >
               {innText}
            </button>
         </div>
         <div className="menu__option--top"></div>
         <div className="menu__option--bottom"></div>
         <div className="menu__option--back">
            {controlsMap}
            <button
               className="menu__btn--back"
               onClick={toggleFrame}
            >
               {CANCEL}
            </button>
         </div>
      </div>
   );
}



export default connect(
   null, 
   { changeFrameStatus, showFrame }
)(RotatedOption);