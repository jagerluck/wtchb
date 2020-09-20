import React from 'react';


function PicsDrops() {

   const createHearts = () => {
      let colors = ['#333', '#f00', '#0f0', '#00f', '#ff0', '#fff', '#f0f', '#0ff', '#abc', '#d88888', '#d8a', '#4fa388'];
      return [...new Array(100)].map(el => {
         el = document.createElement('span');
         el.innerText = ''
         el.className = 'dropping-heart';
         el.style.color = colors[Math.random()*12];

      })
   }

   console.log(createHearts());

   return (
      <div className='hearts-canvas'>
         
      </div>
   )
}


export default PicsDrops;