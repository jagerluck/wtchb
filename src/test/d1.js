class HeartsFactory {
   constructor(colors, size) {
      this.colors = colors;
      this.size = size;
      Array.isArray(this.colors) ? this.heartElements = [] : this.heartElements=null;
      this.provideHeart();
   }
   
   provideHeart() {
      if (Array.isArray(this.colors)) {
         this.colors.forEach(color => {
            this.provideStyles(color);
         })
      } else {
         this.provideStyles(this.colors)
      }
   }

   provideStyles(color) {
      let heartDiv = document.createElement('div');
      let leftCircle = document.createElement('span');
      let rightCircle = document.createElement('span');
      let basePart = document.createElement('span');
      // parent element
      let parent = {
         width: this.size,
         height: (this.size / 6) * 5,
      };
      // heart's shape top left and right attrs
      let circles = {
         width: (this.size / 30) * 16,
         height: this.size / 2,
      };
      // heart's shape base
      let base = {
         width: (this.size / 12) * 7,
         top: this.size / 5,
         height: (this.size / 30) * 16,
         marginLeft: this.size / 3.2,
      };
      heartDiv.style = `width: ${parent.width}px; height: ${parent.height}px; position: absolute;`;
      leftCircle.style = `position: absolute; transform: rotate(-40deg);border-radius: 50% 50% 50% 35%; height: ${circles.height}px; width: ${circles.width}px; left: 0; background-color: ${color};`;
      rightCircle.style = `position: absolute; transform: rotate(5deg); border-radius: 50% 35% 50% 50%; height: ${circles.height}px; width: ${circles.width}px; right: 0; background-color: ${color};`;
      rightCircle.style = `position: absolute; transform: rotate(130deg); border-radius: 50% 30% 50% 50%; height: ${circles.height}px; width: ${circles.width}px; right: 0; background-color: ${color};`;
      basePart.style = `position: absolute; height: ${base.height}px; width: ${base.width}px; background-color: ${color}; border-radius: 20% 0 20% 0; transform: rotate(45deg) translateX(45%);`;
      heartDiv.appendChild(leftCircle);
      heartDiv.appendChild(rightCircle);
      heartDiv.appendChild(basePart);
      Array.isArray(this.heartElements)
         ? this.heartElements.push(heartDiv)
         : this.heartElements = heartDiv;
   }

   createAndAppendElements(parent, quantity) {
      return setTimeout(() => {
         for (let i = 0; i < 5; i++) {
            let newEl = Array.isArray(this.heartElements)
               ? this.heartElements[
                    Math.floor(Math.random() * this.colors.length)
                 ].cloneNode(true)
               : this.heartElements.cloneNode(true);
            newEl.style.transform = `scale(${Math.random()*1.5+0.5})`;
            newEl.style.top = `${Math.random() * 100}%`;
            newEl.style.left = `${Math.random() * 100}%`;
            newEl.style.animation = `animateMe ${
               Math.random() * 20 + 1
            }s linear infinite`;
            parent.appendChild(newEl);
         }
         // even after optimization still lags as hell
         let newQuantity = quantity - 5;
         if (newQuantity > 4) this.createAndAppendElements(parent, newQuantity);
      }, 500);
   }  
}

