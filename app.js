var calc=require("./calc");
console.time('time');
console.log(calc.sum(1,3,2));
console.error(calc.dif(1,3,2));
console.error(calc.div(8,2,88));
console.error(calc.mul(8,2,88));
console.timeEnd('time');