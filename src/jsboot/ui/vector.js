(function() {
  /*global Raphael, console*/
  'use strict';

  (function() {
    if (typeof Raphael == 'undefined')
      console.warn(' [jsBoot.ui]: Raphael is not loaded - nicy graphs support disabled');
    else
      this.Vector = function() {
        return Raphael;
      };
  }).apply(jsBoot.ui);

})();