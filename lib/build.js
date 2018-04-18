var exec = require('child_process').exec;
var path = require('path');

console.log('Building...');
exec('hugo', function(error, stdout, stderr) {
  if (error !== null) {
    console.error(error);
    return;
  }
  console.log('Site built at /docs.');
});
