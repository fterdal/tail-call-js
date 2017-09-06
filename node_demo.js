/*
Does not use tail recursion.
Why? Because the last operation is a multiplication.
*/
const factorial = n => {
  if (n <= 0) return 1;
  return n * factorial(n-1);
}
