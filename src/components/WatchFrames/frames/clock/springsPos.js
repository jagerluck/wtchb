function watchKeyframes(sec, min, hour, adjmin=0, adjhour=0) {
   console.log('inside watchKeyFtrames', sec, min, hour, adjmin);

   return `
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
   }`;
}


export function springsPos(functionality) {
   let date = new Date()
   switch (functionality) {
      case 'time':
         let hour = date.getHours() * 30;
         let min = date.getMinutes() * 6;
         let sec = date.getSeconds() * 6;
         let adjmin = sec / 60;
         let adjhour = min / 12;
         return watchKeyframes(sec, min, hour, adjmin, adjhour);
      case 'stopwatch':
         return watchKeyframes(0, 0, 0);
      default:
         break;
   }
}
