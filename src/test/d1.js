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

function Doo() {
   this.ii = 'ii'
   this.oo = 'oo'
}

Doo.prototype.jj = function() {
   return console.log('hey bro')
}

const j = new Doo()

console.log(j.jj())

const arrr = [-2, 4, 89, 1]



console.log(arrr);


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
   return [].reduce.call(arguments, (ac, cu) => {
      ac.push(cu)
      return ac
   }, [])
}

function spy(fn) {
   let save = {}
   return function() {
      save
   }
}

// work = spy(work);

console.log(work(1, 2)) // 3
console.log(work(4, 5)) // 9

// for (let args of work.calls) {
//    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
// }