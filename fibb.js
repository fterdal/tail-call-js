// Compute Fibbonacci iteratively
const iterFibb = n => {
  let start = [1,1,2]
  if (n <= 3) {
    return start.slice(0,n);
  }
  for(let i = 2; i<n-1; ++i) {
    const penultimate = start[i-1];
    const last = start[i];
    start.push( penultimate + last );
  }
  return start;
}

// Compute Fibbonacci recursively
const recurFibb = n => {
  
}

// Compute Fibbonacci tail-recursively
const tailFibb = n => {

}


//      --- Tests ---

// Iterative
// console.log(`iterFibb -- Expecting ${iterFibb(3)} to equal 1,1,2`);
// console.log(`iterFibb -- Expecting ${iterFibb(1)} to equal 1`);
// console.log(`iterFibb -- Expecting ${iterFibb(8)} to equal 1,1,2,3,5,8,13,21`);

// Recursive
console.log(`recurFibb -- Expecting ${recurFibb(3)} to equal 1,1,2`);
console.log(`recurFibb -- Expecting ${recurFibb(1)} to equal 1`);
console.log(`recurFibb -- Expecting ${recurFibb(8)} to equal 1,1,2,3,5,8,13,21`);





//
