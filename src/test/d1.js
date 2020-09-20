class HeartsFactory {
   constructor(color, size) {
      this.color = color;
      this.size = size;
      this.heartElement = null;
      this.provideHeart();
   }
   
   provideHeart() {
      let heartDiv = document.createElement('div');
      let leftCircle = document.createElement('span');
      let rightCircle = document.createElement('span');
      let basePart = document.createElement('span');
      // parent element
      let parent = {
         width: this.size,
         height: (this.size / 6) * 5,
      }
      // heart's shape top left and right attrs
      let circles = {
         width: (this.size / 30) * 16,
         height: this.size / 2,
      }
      // heart's shape base
      let base = {
         width: (this.size / 12) * 7,
         top: this.size / 5,
         height: (this.size / 30) * 16,
         marginLeft: Math.round(this.size / 3.25),
      };
      heartDiv.style = `width: ${parent.width}px; height: ${parent.height}px; position: absolute;`;
      leftCircle.style = `position: absolute; transform: rotate(-45deg);border-radius: 50% 50% 50% 0; height: ${circles.height}px; width: ${circles.width}px; left: 0; background-color: ${this.color};`;
      rightCircle.style = `position: absolute; transform: rotate(135deg); border-radius: 50% 0 50% 50%; height: ${circles.height}px; width: ${circles.width}px; right: 0; background-color: ${this.color};`;
      basePart.style = `position: absolute; top: ${base.top}px; height: ${base.height}px; width: ${base.width}px; left: 0; background-color: ${this.color}; margin-left: -${base.marginLeft}px; border-radius: 20% 0 20% 0; transform: rotate(45deg); translate(-50%, -50%); left: 50%`;
      heartDiv.appendChild(leftCircle);
      heartDiv.appendChild(rightCircle);
      heartDiv.appendChild(basePart);
      this.heartElement = heartDiv;
   }

   createAndAppendElements(parent, quantity) {
      for (let i = 0; i < quantity; i++) {
         let newEl = this.heartElement.cloneNode(true);
         newEl.style.top = Math.random()*500+'px'; 
         newEl.style.left = Math.random()*500+'px';
         // newEl.style.animation = 'animateMe 2s linear infinite';
         parent.appendChild(newEl);
      }
   }  
}
let appender = document.querySelector('.appender');

const hearts = new HeartsFactory('red', 20);
hearts.createAndAppendElements(appender, 20)