import React from 'react';


export function SimpleOption(props) {
   let { showFrame, innText, frame, position, rotated } = props;


   let triggerFrame = (frame, cancel = false) => {
      // check if something was in active state (rotated)
      if (rotated && !cancel) return alert('Cancel current element!');
      return showFrame(frame);
   };

   return (
      <div className={"menu__option"+position}>
         <button className="menu__btn" onClick={() => triggerFrame(frame)}>
            {innText}
         </button>
      </div>
   );
}