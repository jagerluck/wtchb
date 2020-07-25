import { showFr, SHOW_FRAME } from './actions'

const initialState = {
   currentFrame: 'undefined',
   element: {}
} 

function chFrame(state = initialState, action) {
   switch (action.type) {
      case SHOW_FRAME: 
         return Object.assign({}, state, {
            currentFrame: action.type,
            element: 
         })
      default: 
         return state
   }
}


