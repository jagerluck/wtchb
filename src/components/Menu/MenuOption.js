import React from 'react';
import { connect } from 'react-redux';
import { showFrame } from 'redux/actions.js';
import RotatedOption from './Options/RotatedOption.js';
import { SimpleOption } from './Options/SimpleOption.js';


const control = new Map([
   ['TIME'],
   [
      'TIMER',
      [
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
   ],
   [
      'STOPWATCH',
      [
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
   ],
   ['CALENDAR'],
]);


function MenuOption(props) {
   return (<RotatedOption adjs={control.get(props.frame)} {...props} />)
}


function mapStateToProps(state) {
   const { frameReducer } = state
   return { rotated: frameReducer.rotated };
}


export default connect(mapStateToProps, { showFrame })(MenuOption);