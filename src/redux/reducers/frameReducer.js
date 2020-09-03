import { CreateFrame } from '../../components/WatchFrames/CreateFrame.js'
import { TIME, CALENDAR, TIMER, STOPWATCH } from '../actions.js'



const initialState = {
   currentFrame: '',
   element: '',
   rotate: false,
   blocked() { return !this.rotate ? false : true },
   num: 0,
}


export function reduceState(state = initialState, action) {
   let { type, rotate } = action

   let newN = state.num + 1

   if (state.currentFrame === type || !type) return state

   switch (type) {
      case TIME:
         let newState = Object.assign({}, state, {
            currentFrame: type,
            element: CreateFrame(type),
            rotate: rotate ? !state.rotate : state.rotate,
            blocked() { return !this.rotate ? false : true },
            num: newN,
         })
         console.log('before returning new state')
         return newState
      default: 
         return state
   }
}