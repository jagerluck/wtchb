import { CreateFrame } from '../../components/WatchFrames/CreateFrame.js'
import { TIME, CALENDAR, TIMER, STOPWATCH } from '../actions.js'



const initialState = {
   currentFrame: ' ',
   element: ' ',
   num: 0,
}


export function reduceState(state = initialState, action) {
   let { type } = action

   let newN = state.num + 1

   switch (type) {
      case TIME:
         console.log(type)
         let newState = Object.assign({}, state, {
            currentFrame: type,
            // need to remake the createFrame factory to provide complete react element, so I could keep it in store and pass to view
            element: CreateFrame(type),
            num: newN,
         })
         console.log('before returning new state')
         return newState
      default: 
         return state
   }
}


// CreateFrame(action.type)