export function springsPos(functionality, movable) {
   let date;
   let hour;
   let min;
   let sec;
   let watchKeyframes;

   switch (functionality) {
      case 'time':
         date = new Date();
         hour = date.getHours() * 30;
         min = date.getMinutes() * 6;
         sec = date.getSeconds() * 6;
         console.log(hour, 'hour', min, 'min', sec, 'sec')
         let adjmin = sec / 60;
         let adjhour = min / 12;
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
            }`;
         break;
      case 'stopwatch':
         date = new Date();
         hour = date.getHours() * 30;
         min = date.getMinutes() * 6;
         sec = date.getSeconds() * 6;
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
            }`;
         break;
      default: 
         break;
   }
   return watchKeyframes;
}
