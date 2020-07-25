export const TIME_NOW = 'TIME_NOW'
export const CALENDAR = 'CALENDAR'
export const TIMER = 'TIMER'
export const STOPWATCH = 'STOPWATCH'

export function showFr(frame) {
   return {
      type: SHOW_FRAME,
      frame: frame
   }
}

`
old form : function(factory_name) -> factory.create()

new : nested component's function setState(factory_name)
separate file with factory building logic

`