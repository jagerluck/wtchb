let bitmasks = new Map([
   ['UNAUTHORIZED', 1],
   ['LOGGED', 2],
   ['PREMIUM', 4],
   ['COULD_REMOVE_POSITIONS', 8],
   ['COULD_ADD_WEBSITE_DATA', 16],
   ['ADMIN', 32],
]);

function UserPermissions(status) {
   this.status = status;
   this.permissions = [];
}

UserPermissions.prototype.getPermissions = function() {
   bitmasks.forEach((v,k) => {
      if ((this.status & v) > 0) {
         this.permissions.push(k)
      }
   })
   return this.permissions
}
let toCheckPermissions = new UserPermissions(54);
// console.log(toCheckPermissions.getPermissions())


let toBeRemoved = {
   prop1: {
      mego: 'prop1'
   }
}
let st = ['some', 'something'];
let weakM = new WeakMap().set(st, 'lolo')

// toBeRemoved = null

console.log(weakM.get(st));

console.log('lolo'.charAt(2));

