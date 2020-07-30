import { CreateFrame } from '../../components/WatchFrames/CreateFrame.js'
import { TIME_NOW, CALENDAR, TIMER, STOPWATCH } from '../actions.js'



const initialState = {
   currentFrame: 'undefined frame',
   element: 'some initial element'
} 

const types = [TIME_NOW, CALENDAR, TIMER, STOPWATCH]


export default function(state = initialState, action) {
   if (action !== undefined && types.filter(el => el === action.type).length === 1) 
   console.log('im here');
      return Object.assign(state, {}, {
         currentFrame: action.type,
         // need to remake the createFrame factory to provide complete react element, so I could keep it in store and pass to view
         element: CreateFrame(action.type)
      })
   return state
}


// CreateFrame(action.type)