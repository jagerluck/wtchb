export const TIME = 'TIME'
export const CALENDAR = 'CALENDAR'
export const TIMER = 'TIMER'
export const STOPWATCH = 'STOPWATCH'
export const CANCEL = 'Cancel';
export const RUNNING = 'running';
export const PAUSED = 'paused';
export const RESET = 'reset';





export const showFrame = (frame) => ({
   type: frame
})

export const changeFrameStatus = (playState) => {
   return { type: playState }
};