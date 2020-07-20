function createFrame(type) {
  switch(type) {
    case('time'):
      return new Time_Frame();
    case('calendar'):
      return new Calendar_Frame();
    case('stopwatch'):
      return new Stopwatch_Frame();
    case('timer'):
      return new Timer_Frame();
    default:
      return 'No factory'
  }
}