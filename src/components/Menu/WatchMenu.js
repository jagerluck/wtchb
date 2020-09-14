import React from 'react'
import { TIME, TIMER, STOPWATCH, CALENDAR } from 'redux/actions.js';
import { connect } from 'react-redux';
import { showFrame } from 'redux/actions.js';
import RotatedOption from './Options/RotatedOption.js';



const options = [
   {
      frame: TIME,
      innerText: 'Current Time',
   },
   {
      frame: STOPWATCH,
      innerText: 'Stopwatch',
      adjs: [
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
      frame: TIMER,
      innerText: 'Timer',
      adjs: [
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
   let { rotated, showFrame } = props

   let optionsMap = options.map((el, i) => {
      return (
         <RotatedOption
            rotated={rotated}
            showFrame={showFrame}
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
            adjs={el.adjs ? el.adjs : ''}
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
   { showFrame }
)(WatchMenu)