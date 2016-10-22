var calc=require("./calc");
var cal=calc(100);
console.time('time');
console.log(cal.sum(1, 2, 3));
console.error(cal.dif(10, 20));
console.error(cal.div(2,2));
console.error(cal.mul(2,2));
console.timeEnd('time');