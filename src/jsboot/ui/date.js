jsBoot.pack('jsBoot.ui', function() {
  /*global moment, console*/
  'use strict';

  if (typeof moment == 'undefined')
    console.warn(' [jsBoot.ui]: moment is not loaded - date manipulation library not available');
  else
    this.date = moment;

});
