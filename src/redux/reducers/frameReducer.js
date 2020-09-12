import { CreateFrame } from 'components/WatchFrames/CreateFrame.js'
import { TIME, CALENDAR, TIMER, STOPWATCH } from 'redux/actions.js'



const initialState = {
   currentFrame: '',
   element: '',
   rotated: false,
};


export function frameReducer(state = initialState, action) {
   let { type } = action
   let newState;

   switch (type) {
      case TIME:
         newState = Object.assign({}, state, {
            currentFrame: type,
            element: CreateFrame(type),
            rotated: state.rotated ? false : true,
         });
         break;
      case CALENDAR:
         newState = Object.assign({}, state, {
            currentFrame: type,
            element: CreateFrame(type),
            rotated: state.rotated ? false : true,
         });
         break;
      case TIMER:
         newState = Object.assign({}, state, {
            currentFrame: type,
            element: CreateFrame(type),
            rotated: state.rotated ? false : true,
         });
         break;
      case STOPWATCH:
         newState = Object.assign({}, state, {
            currentFrame: type,
            element: CreateFrame(type),
            rotated: state.rotated ? false : true,
         });
         break;
      default:
         newState = Object.assign({}, initialState);
      }
   return newState
}