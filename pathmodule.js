const path = require('path'); 

console.log(path.sep);

const filePath = path.join('/test1','test2', 'demo.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, '/test1', 'test2', 'demo.txt');
console.log(absolute);