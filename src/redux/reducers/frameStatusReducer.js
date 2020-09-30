import { PAUSED, RUNNING, RESET } from 'redux/actions.js';

const initState = {
   type: null,
};

export function frameStatusReducer(state=initState, action) {
   const { type } = action;
   switch (type) {
      case RUNNING:
         return Object.assign(
            {},
            {
               type: RUNNING,
            }
         );
      case PAUSED:
         return Object.assign(
            {},
            {
               type: PAUSED,
            }
         );
      case RESET:
         return Object.assign(
            {},
            {
               type: RESET,
            }
         );
      default:
         return Object.assign(
            {},
            {
               type: null,
            }
         );
   }
}