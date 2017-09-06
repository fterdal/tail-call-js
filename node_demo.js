'use strict';
/*
Does NOT use tail recursion.
Why? Because the last operation is a multiplication.
*/
const factorial = n => {
  if (n <= 0) return 1;
  return n * factorial(n-1);
}

/*
DOES use tail recursion.
Notice how every time you see a return statement, its
either a constant or a function invocation?
*/
const tailFactorial = n => {
  const tailHelper = (n, acc) => {
    if (n <= 0) return acc;
    return tailHelper(n-1, n*acc)
  }
  return tailHelper(n, 1)
}

const n = 2

// console.log(`factorial(${n}): ${factorial(n)}`);



/*
It is unnecessary to keep around a stack-frame just so that it can get a callee's
result and return it without any further evaluation.
So, when the compiler detects that the caller is merely waiting around for the
callee to finish executing, it can just reuse the caller's stack-frame instead of
creating a whole new stack frame for the callee.
*/


/*
References:
http://2ality.com/2015/06/tail-call-optimization.html
https://taylodl.wordpress.com/2013/06/07/functional-javascript-tail-call-optimization-and-trampolines/
https://www.youtube.com/watch?v=L1jjXGfxozc
http://www.brendangregg.com/FlameGraphs/cpuflamegraphs.html
https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/ch6.md
http://kangax.github.io/compat-table/es6/
*/
