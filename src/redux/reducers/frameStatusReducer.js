const initState = {
   action: 'stop'
}

export function frameStatusReducer(state=initState, status) {
   let { type } = status;
   if (!type) return state;
   
   let newState = Object.assign({}, state, {
      action: type,
   });

   return newState;
}