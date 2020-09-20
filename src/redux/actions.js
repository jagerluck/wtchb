export const TIME = 'TIME'
export const CALENDAR = 'CALENDAR'
export const TIMER = 'TIMER'
export const STOPWATCH = 'STOPWATCH'




export const showFrame = (frame, rotated) => ({
   type: frame
})

export const changeFrameStatus = (status) => ({
   type: status
})