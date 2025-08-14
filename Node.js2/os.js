const os = require('os');

console.log('Architecture:', os.arch()); // outputs: 'x64'
console.log('Platform:', os.platform()); // outputs: 'win32'
console.log('free memory:', os.freemem()); // outputs: 1241145344
console.log('total memory:', os.totalmem()); // outputs: 18446744073709551616
console.log('Hostname:', os.hostname()); // outputs: 'DESKTOP-99R8KQG'
const cpus = os.cpus(); // outputs: [ { model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
console.log(cpus[0].model, cpus[0].speed); // outputs: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz'