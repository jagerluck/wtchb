const initState = {
   action: 'paused'
}

export function frameStatusReducer(state=initState, status) {
   const { type } = status;
   if (!type) return state;
   switch (type) {
      case 'running':
         return Object.assign({}, state, {
            action: 'running',
         });
      case 'paused':
         return Object.assign({}, state, {
            action: 'paused',
         });
      case 'reset':
         return Object.assign({}, state, {
            action: 'reset',
         });
      default:
         return state;
   }
}