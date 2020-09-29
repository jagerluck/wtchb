import { connect } from 'react-redux';
import React from 'react'

import RotatedOption from './Options/RotatedOption.js';
import { TIME, TIMER, STOPWATCH, CALENDAR } from 'redux/actions.js';


const options = [
   {
      frame: TIME,
      innerText: 'Current Time',
   },
   {
      frame: STOPWATCH,
      innerText: 'Stopwatch',
      // options according to animation-play-state
      controls: [
         {
            option: 'running',
            name: 'Run',
         },
         {
            option: 'paused',
            name: 'Pause',
         },
         {
            option: 'reset',
            name: 'Reset',
         },
      ],
   },
   {
      frame: TIMER,
      innerText: 'Timer',
      controls: [
         {
            option: 'run',
            name: 'Run',
         },
         {
            option: 'pause',
            name: 'Pause',
         },
         {
            option: 'reset',
            name: 'Reset',
         },
      ],
   },
   {
      frame: CALENDAR,
      innerText: 'Calendar',
   },
];


function WatchMenu(props) {
   let { rotated } = props

   let optionsMap = options.map((el, i) => {
      return (
         <RotatedOption
            rotated={rotated}
            key={i + 2000}
            frame={el.frame}
            innText={el.innerText}
            position={
               i === 0
                  ? ' top-border'
                  : i === options.length - 1
                  ? ' bottom-border'
                  : ' intermediate'
            }
            controls={el.controls ? el.controls : ''}
         />
      );
   })

   return ( 
      <div className="menu">
         {optionsMap}
      </div>
   )
}


function mapProps(state) {
   const { frameReducer } = state;
   return { rotated: frameReducer.rotated };
}

export default connect(
   mapProps,
   null
)(WatchMenu)