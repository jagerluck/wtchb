import { connect } from 'react-redux';


const keyframes = (hour, min, sec, adjmin, adjhour) => `
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
   }
`;

const timeKeyframes = () => {
   // to get actual date with adjastments for animation
   const date = new Date();
   const hour = date.getHours() * 30;
   const min = date.getMinutes() * 6;
   const sec = date.getSeconds() * 6;
   const adjmin = sec / 60;
   const adjhour = min / 12;

   return keyframes(hour, min, sec, adjmin, adjhour);
}

const stopwatchKeyframes = (action, state=null) => {
   const { hour, min, sec, adjmin, adjhour } = (state == null ? { hour = 0, min = 0, sec = 0, adjmin = 0, adjhour=0 } : state);

   return keyframes(hour, min, sec, adjmin, adjhour);
}

// todo : hold time state in reducer

function SpringsPos(props) {
   const { state, action, functionality } = props;   

   switch (functionality) {
      case 'time':
         return timeKeyframes();
      case 'stopwatch':
         return stopwatchKeyframes(state, action);
      default:
         return ``;
   }
}


const mapState = (props) => {
   const { frameStatusReducer, frameReducer } = props;
   return {
      action: frameStatusReducer.action,
      frame: frameReducer.currentFrame,
   };
}


export default connect(
   mapState,
   null
)(SpringsPos)
