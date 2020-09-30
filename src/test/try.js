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


const mapmap = new WeakMap();
const ong = {};
const onb = {};

mapmap.set(ong, 'lololo')
mapmap.set(onb, 'lololo')
console.log(mapmap.delete(ong))
console.log(mapmap.has(ong))