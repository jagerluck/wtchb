import { CreateFrame } from 'components/WatchFrames/CreateFrame.js'
import { TIME, CALENDAR, TIMER, STOPWATCH, CANCEL } from 'redux/actions.js';



const initialState = {
   currentFrame: '',
   element: '',
   rotated: false,
};


export function frameReducer(state = initialState, action) {
   let { type } = action
   switch (type) {
      case TIME:
         return Object.assign({}, state, {
            currentFrame: type,
            element: CreateFrame(type),
            rotated: state.rotated ? false : true,
         });
      case CALENDAR:
         return Object.assign({}, state, {
            currentFrame: type,
            element: CreateFrame(type),
            rotated: state.rotated ? false : true,
         });
      case TIMER:
         return Object.assign({}, state, {
            currentFrame: type,
            element: CreateFrame(type),
            rotated: state.rotated ? false : true,
         });
      case STOPWATCH:
         return Object.assign({}, state, {
            currentFrame: type,
            element: CreateFrame(type),
            rotated: state.rotated ? false : true,
         });
      case CANCEL: 
         return Object.assign({}, initialState)
      default:
         return state;
      }
}