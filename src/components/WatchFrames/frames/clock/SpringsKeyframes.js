import { TIME, STOPWATCH, RESET } from 'redux/actions.js';
import { keyframes } from 'styled-components';

const provideAttrs = (hour, min, sec, adjmin, adjhour, reset = false) => ({
   movesechands: keyframes`
      to {
         transform: rotate(${reset ? 0 : sec + 360}deg);
      }
   `,
   moveminhands: keyframes`
      to {
         transform: rotate(${reset ? 0 : min + 360 + adjmin}deg);
      }
   `,
   movehourhands: keyframes`
      to {
         transform: rotate(${reset ? 0 : hour + 360 + adjhour}deg);
      }
   `,
   hour,
   min,
   sec,
   adjmin,
   adjhour,
});

const timeKeyframes = () => {
   const date = new Date(),
         hour = date.getHours() * 30,
         min = date.getMinutes() * 6,
         sec = date.getSeconds() * 6,
         adjmin = sec / 60,
         adjhour = min / 12;
   return provideAttrs(hour, min, sec, adjmin, adjhour);
};

const resetKeyFrames = () => {
   return provideAttrs(0, 0, 0, 0, 0, true);
}

const stopwatchKeyframes = () => {
   return provideAttrs(0, 0, 0, 0, 0);
};

export const SpringsKeyframes = (frame) => {
   switch (frame) {
      case TIME:
         return timeKeyframes();
      case STOPWATCH:
         return stopwatchKeyframes();
      case RESET:
         return resetKeyFrames();
      default:
         return ``;
   }
};