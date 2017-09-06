'use strict';

const overflow = n => {
  console.log(`n: ${n}`);
  return overflow(n+1);
}



// console.log(overflow(0));
