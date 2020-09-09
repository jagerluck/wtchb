import React from 'react';
import { connect } from 'react-redux';
import { showFrame } from 'redux/actions.js';
import RotatedOption from './Options/RotatedOption.js';
import { SimpleOption } from './Options/SimpleOption.js';




function MenuOption(props) {
   let { frame, isRotating, innText, position, rotatedSt } = props;

   
   return isRotating === true ? (
      <RotatedOption
         frame={frame}
         innText={innText}
         position={position}
         showFrame={showFrame}
         rotatedSt={rotatedSt}
      />
   ) : (
      <SimpleOption
         frame={frame}
         innText={innText}
         position={position}
         showFrame={showFrame}
      />
   );
}


function mapStateToProps(state) {
   let { rotatedSt } = state;
   return { rotatedSt: rotatedSt };
}


export default connect(mapStateToProps, { showFrame })(MenuOption);