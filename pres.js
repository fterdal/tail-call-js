// Replace While Loop With Recursion:
// let counter = 10;
// while(counter > 0) {
//     console.log(counter--);
// }
//
//
// const countdown = function(value) {
//     if (value > 0) {
//         console.log(value);
//         return countdown(value - 1);
//     } else {
//         return value;
//     }
// };
// countdown(10);

// Iterative Factorial Computatation
// const iterFactorial = n => {
//   fact = 1;
//   while (n > 0) {
//     fact *= n;
//     n--;
//   }
//   return fact;
// }
// const n = 5
// console.log(`iterFactorial(${n}): ${iterFactorial(n)}`);


// Recursive Factorial Computation
// const recurFactorial = n => {
//   if (n <= 0) return 1;
//   return n * recurFactorial(n-1);
// }
// const m = 5
// console.log(`recurFactorial(${m}): ${recurFactorial(m)}`);


// Tail-Recursive Factorial Computation
// const tailFactorial = n => {
//   const tailHelper = (n, acc) => {
//     if (n <= 0) return acc;
//     return tailHelper(n-1, n*acc)
//   }
//   return tailHelper(n, 1)
// }
// const p = 5
// console.log(`tailFactorial(${p}): ${tailFactorial(p)}`);
