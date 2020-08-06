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
function Person(name, age, job) {
   this.name = name
   this.age = age
   this.job = job
}

let james = new Person('James', 22, 'teacher')


Person.prototype.goals = 'dream job'

console.log(james.goals)

function Developer(specialty, ...args) {
   Person.apply(this, args)
   
   this.specialty = specialty
}

Developer.prototype = Object.create(Person.prototype)

let golangDev = new Developer('Roma', 27, 'developer', 'golang dev')

function letsDebugg() {
   console.log(golangDev)
   console.log(Object.getOwnPropertyNames(golangDev))
   console.log(Object.keys(golangDev))
}   

letsDebugg()


let fkdsljf = {
   one: 1,
   two() { return this.one }
}

console.log(fkdsljf.two())

// Notes
// getElementsByName has desired perfomance O(1) as opposed to O(n - element in the tree node) for querySelector. Also the last one returns static collection and the first one returns dynamicly changing collection . Both return NodeList collection and not HTMLCollection as in case of getElementsByClassName

// for in - used for property keys
// for of - used for property values
