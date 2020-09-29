import { TIME, STOPWATCH } from 'redux/actions.js';

export const getKeyframes = (hour, min, sec, adjmin, adjhour, keyframes) => ({
   movesechands: keyframes`
      from {
         transform: rotate(${sec}deg);
      }
      to {
         transform: rotate(${sec + 360}deg);
      }
   `,
   moveminhands: keyframes`
      from {
         transform: rotate(${min + adjmin}deg);
      }
      to {
         transform: rotate(${min + 360 + adjmin}deg);
      }
   `,
   movehourhands: keyframes`
      from {
         transform: rotate(${hour + adjhour}deg);
      }
      to {
         transform: rotate(${hour + 360 + adjhour}deg);
      }
   `,
});

const timeKeyframes = (keyframes) => {
   const date = new Date();
   const hour = date.getHours() * 30;
   const min = date.getMinutes() * 6;
   const sec = date.getSeconds() * 6;
   const adjmin = sec / 60;
   const adjhour = min / 12;
   return getKeyframes(hour, min, sec, adjmin, adjhour, keyframes);
};

export const stopwatchKeyframes = (keyframes) => {
   return Object.assign({}, getKeyframes(0, 0, 0, 0, 0, keyframes));
};

export const getSpringsPos = (frame, keyframes) => {
   switch (frame) {
      case TIME:
         return timeKeyframes(keyframes);
      case STOPWATCH:
         return stopwatchKeyframes(keyframes);
      case 'reset':
         return stopwatchKeyframes(keyframes);
      default: 
      return ``;
   }
};