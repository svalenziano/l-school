console.log(this); 
// coderpad logsthe global obj
// nodde logs module.exports (aka "Empty object" per LS)

console.log(this === module.exports)
global.myprop = 123;
console.log(global.myprop)