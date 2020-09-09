import { CreateFrame } from 'components/WatchFrames/CreateFrame.js'
import { TIME, CALENDAR, TIMER, STOPWATCH } from 'redux/actions.js'



const initialState = {
   currentFrame: '',
   element: '',
   rotatedSt: false,
};


export function frameReducer(state = initialState, action) {
   let { type, rotate } = action
   let newState;

   console.log('before creating form')

   switch (type) {
      case TIME:
         newState = Object.assign({}, state, {
            currentFrame: type,
            element: CreateFrame(type),
            rotatedSt: false,
         });
         return newState;
      case CALENDAR:
         newState = Object.assign({}, state, {
            currentFrame: type,
            element: CreateFrame(type),
            rotatedSt: false,
         });
         return newState;
      case TIMER:
         newState = Object.assign({}, state, {
            currentFrame: type,
            element: CreateFrame(type),
            rotatedSt: state.rotatedSt ? false : true,
         });
         return newState;
      case STOPWATCH:
         newState = Object.assign({}, state, {
            currentFrame: type,
            element: CreateFrame(type),
            rotatedSt: state.rotatedSt ? false : true,
         });
         return newState;
      default:
         return state;
   }
}