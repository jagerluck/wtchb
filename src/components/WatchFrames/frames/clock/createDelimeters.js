import React from 'react'


export function CreateDelimeters(
   angle,
   amount_of_delimeters,
   startX,
   startY,
   hypotenuse
) {
   const MemoizedDelimeters = React.useCallback(
      () => buildDelimeters(
         angle,
         amount_of_delimeters,
         startX,
         startY,
         hypotenuse
         ),
      [angle, amount_of_delimeters]
   );

   return <MemoizedDelimeters />;
}


// function which creates circle shaped delimeters in form of span (whatever is needed) elements
function buildDelimeters(angle, amount_of_delimeters, startX, startY, hypotenuse) {
   let trVal = {
      hypse: hypotenuse,
      el_angle: 0,
      startY: startY,
      startX: startX,
      cathAngl() { return (180 - this.el_angle) / 2 },
      // needed for built-in Math.sin(cos) function
      toRad(angleA = this.el_angle / 2) { return angleA * Math.PI / 180 },
      // straight line between measure units in watch scale. Needed to provide, since it'd be a hypotenuse of sought-for lines(translateX and translateY values).
      tang() { return Math.sin(this.toRad()) * this.hypse * 2 },
      // final 'translate' values. Now we know hypotenuse of the triangle, so we could find cathets (needed values for translate func) X(0) -> X(1), as well as Y(0) -> Y(1).
      trX() { return this.startX + this.tang() * (Math.sin(this.toRad(this.cathAngl()))) },
      trY() { return this.startY + this.tang() * (Math.cos(this.toRad(this.cathAngl()))) },
   }

   let spans = new Array(amount_of_delimeters)
   const big_delim = amount_of_delimeters / 12

   for (let i = 0; i < amount_of_delimeters; i++) {
      let transformation = `
         translateY(${trVal.trY()}px) 
         translateX(${ trVal.trX()}px)
         rotate(${trVal.el_angle}deg)
         `
      if (i % big_delim === 0) {
         spans.push(<span className="big-delimeter" style={{ transform: transformation }} key={i + 100} />)
      } else {
         spans.push(<span className="small-delimeter" style={{ transform: transformation }} key={i + 100} />)
      }
      trVal.el_angle += angle
   }
   return spans
}
