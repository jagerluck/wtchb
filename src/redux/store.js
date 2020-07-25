import { configureStore } from '@reduxjs/toolkit'
import stateReducer from './stateReducer.js'

export default configureStore({
   reducer: {
      counter: stateReducer
   }
})







const storeeee = {
   st1: 'active element in menu',
   st2: 'what frame is active',
      st3: 'color theme',
      calendar: {
         dates: {
            date1: {
               todos: {
                  active: [],
                  canceled: []
               }
            },
            date1: {
               todos: {
                  active: [],
                  canceled: []
               }
            }
         }
      }
   }