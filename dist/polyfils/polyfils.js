(function() {
   if ('containsDate' in Array.prototype) return;
   Array.prototype.containsDate = function(v) {
      var i = this.length;
      while (i--) {
         if (this[i].getTime() === v.getTime()) {
            return true;
         }
      }
      return false;
   };
})()