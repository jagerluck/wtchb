function iterator() {
   let step = 0
   return {
      next: () => {
         step++
         if (step === 1) {
            return {
               value: 'heow',
               done: false
            }
         }
         if (step === 2) {
            return {
               value: 'still heow',
               done: false
            }
         }
         if (step === 3) {
            return {
               value: 'super',
               done: true
            }
         }
         return { value: 'super', done: true }
      },
   }
}



// make an array of arguments ES5
function pam() {
   let pp = []
   // so I call forEach function with context of arguments and let every element be pushed into my original array 
   pp.forEach.call(arguments, el => pp.push(el))
   return pp
}


var already
function debounce(fn, timer) {
   return function() {
      if (!already) {
         already = 1
         console.log(already);
         return function() {
            return setTimeout(() => {
               already = 0
               fn()
            }, timer)
         }()     
      }
      console.log('skipped all the stuff')
   }()
}

const lolo = () => {
   console.log(new Error().stack)
   return console.log('lolo')
}

// debounce(lolo, 1000)

function work() {
   return [].reduce.call(
      !this.v ? arguments : this.v,
      (ac, cu) => {
         ac.push(cu);
         return ac;
      },
      []
   );
}



function Ball(size) {
   this.definition = '\nI\'m a Ball!'
   // this.ability = '\nI\'m rounded'
   this.size = size
}
Ball.prototype.ability = '\nI could fly';

function Game(size) {
   Ball.call(this, size)
   this.theMostNew = 'most new prop'
}

let g = new Game('small')

console.log(g)