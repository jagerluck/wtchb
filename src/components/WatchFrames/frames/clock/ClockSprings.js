import React from 'react'
import styled from 'styled-components'


export function ClockSprings(props) {
   const { functionality } = props

   const date = new Date()
   const hour = date.getHours() * 30
   const min = date.getMinutes() * 6
   const sec = date.getSeconds() * 6
   const adjmin = sec / 60
   const adjhour = min / 12
   let loadKeyframes = ''

   // have no idea how to completely remove style warnings. I need to include dynamic time keyframes and I see it unnecessary to pass it up into root node.

   switch (functionality) {
      case 'time':
         loadKeyframes = `
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
         break
      default:
         break
   }

   const Springs = styled.div`
      all: unset;
      top: -100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      min-width: var(--clock-w-h-inner);
      min-height: var(--clock-w-h-inner);
      max-width: var(--clock-w-h-inner);
      max-height: var(--clock-w-h-inner);

      
      .hour,
      .minute,
      .second {
         display: flex;
         justify-content: center;
         background-color: rgba(255, 255, 255, 0);
         position: absolute;
      }

      .hour {
         width: 160px;
         height: 160px;
         z-index: 11;
      }

      .minute {
         width: 220px;
         height: 220px;
         z-index: 12;
      }

      .second {
         width: 280px;
         height: 280px;
         z-index: 13;
      }

      .central-spring {
         position: absolute;
         top: 50%;
         display: flex;
         justify-content: center;
         align-items: center;
         margin-top: -6px;
         width: 12px;
         height: 12px;
         z-index: 20;
         background: var(--spring-color);
         border-radius: 50%;
         box-shadow: 1px 1px 5px rgb(24, 24, 24);
      }

      .central-spring::after {
         content: '';
         position: absolute;
         background-color: rgb(123, 123, 123);
         z-index: 20;
         width: 2px;
         height: 2px;
         border-radius: 50%;
         box-shadow: -1px -1px 3px white;
         margin: auto;
      }

      .hour div::after {
         content: '';
         bottom: 0;
         width: 2px;
         height: 70px;
         background: linear-gradient(rgb(185, 131, 131), rgb(111, 51, 51));
      }

      .minute div::after {
         content: '';
         bottom: 0;
         width: 1px;
         height: 95px;
         background: rgb(255, 255, 255);
      }

      .hr {
         display: flex;
         transform-origin: bottom;
         justify-content: center;
         align-items: flex-end;
         width: 8px;
         height: 80px;
         border-radius: 6px;
         background: var(--hour-hand);
         box-shadow: 1px 2px 9px rgb(31, 31, 31);
         animation: 43200s linear movehourhands infinite;
      }
   
      .mn {
         display: flex;
         transform-origin: bottom;
         justify-content: center;
         align-items: flex-end;
         width: 4px;
         height: 110px;
         border-radius: 4px;
         background: var(--minute-hand);
         animation: 3600s linear moveminhands infinite;
      }

      .sc {
         width: 1px;
         transform-origin: bottom;
         height: 140px;
         background: var(--sec-hand);
         animation: 60s linear movesechands infinite;
      }

      ${loadKeyframes}`


   return (
      <Springs>
         <div className="central-spring"></div>
         <div className="hour">
            <div className="hr"></div>
         </div>
         <div className="minute">
            <div className="mn"></div>
         </div>
         <div className="second">
            <div className="sc"></div>
         </div>
      </Springs>
   )
}