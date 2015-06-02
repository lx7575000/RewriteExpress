var _ = require('./');
var i = 0;
function add1() {
  return i += 1;
}

addOnce = _.once(add1);

addOnce();
addOnce();
addOnce();