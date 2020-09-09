export function frameStatusReducer(state, action) {

   let { status } = action
   

   return Object.assign({}, state, {
      status: status
   })
}

