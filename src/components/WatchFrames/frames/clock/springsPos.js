export function springsPos(functionality, movable) {
   let date
   let hour
   let min
   let sec
   let adjmin
   let adjhour
   let watchKeyframes

   function timeStamp(action, stamp, running) {
   
      // const stamp = {
      //    date: new Date()
      //    hour
      //    min
      //    sec
      //    adjmin
      //    adjhour
      // }
   }

   `how to make timer
   stop and hold the current time
   start within standart time
   resume within the state time
   `

   switch (functionality) {
      case 'time':
         date = new Date()
         hour = date.getHours() * 30
         min = date.getMinutes() * 6
         sec = date.getSeconds() * 6
         adjmin = sec / 60
         adjhour = min / 12
         
         watchKeyframes = `
         @keyframes movesechands {
            from {
               transform: rotate(${sec}deg);
            }
            to {
               transform: rotate(${sec + 360}deg);
            }
         }
         @keyframes moveminhands {
            from {
               transform: rotate(${min + adjmin}deg);
            }
            to {
               transform: rotate(${min + 360 + adjmin}deg);
            }
         }
         @keyframes movehourhands {
            from {
               transform: rotate(${hour + adjhour}deg);
            }
            to {
               transform: rotate(${hour + 360 + adjhour}deg);
            }
         }`
         break;
      case 'stopwatch':
         break;
      default:
         break;
   }

   return watchKeyframes
}