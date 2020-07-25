import { CreateFrame } from '../Frames/CreateFrame.js'
import React from 'react'


export function RotatingOption(props) {
   let { opt, isRotating, innText } = props;
   
   let [currentFrame, setCurrentFrame] = React.useState('time');

   CreateFrame(currentFrame)
   
   const changeFrame = (fr) => {
      setCurrentFrame(fr)
      // factory to create frame
      return CreateFrame(currentFrame)
   }

   // 1st option to create rotating element
   // 2nd is for common options
   return isRotating === true ?
   (
   <div className="watch-opt-rotate" id={opt}>
      <div className={opt+"__front"}>
         <button className="change-clock" onclick={changeFrame(opt)}>{innText}</button>
      </div>
      <div className={opt+"__top"}></div>
      <div className={opt+"__bottom"}></div>
      <div className={opt+"__back"}>
         <button className={"btn-stop-"+opt}>Stop</button>
         <button className={"btn-start-"+opt}>Start</button>
         <button className={"btn-start-"+opt}>Cancel</button>
      </div>
   </div>
   ) :
      (<div className={opt}><button className="change-clock bottom-border" onclick={fn(opt)}>{innText}</button></div>)
}