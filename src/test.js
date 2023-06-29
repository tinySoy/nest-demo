// eslint-disable-next-line @typescript-eslint/no-var-requires
const os = require('os');

const homedir = os.homedir();

console.log(homedir);

function print(s) {
  console.log(s);
  var s = 2;
  function s() {
  }
  console.log(s);
}
print(1);
