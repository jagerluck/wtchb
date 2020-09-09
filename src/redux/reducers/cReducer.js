import { combineReducers } from 'redux';
import { frameReducer } from './frameReducer';
import { frameStatusReducer } from './frameStatusReducer';



export default combineReducers({
   frameReducer,
   frameStatusReducer,
});
