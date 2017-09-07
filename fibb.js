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

// Compute Fibbonacci recursively -- badly
const recurFibb = (n, arr=[]) => {
  const nextItem = m => {
    if (m < 2) return m;
    return nextItem(m-2) + nextItem(m-1)
  }
  if (n < 1) return arr; // Base case
  return recurFibb(n-1, [nextItem(n)].concat(arr) )
}

// Compute Fibbonacci tail-recursively
const tailFibb = (n, arr=[]) => {
  if (n < 1) return arr; // Base case
  const len = arr.length;
  if (len < 2) return tailFibb(n-2, [1,1])
  return tailFibb( n-1, arr.concat( arr[len-2] + arr[len-1] ) )
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
console.log(`recurFibb -- Expecting ${recurFibb(37)} to equal [something really huge]`);

// Tail Recursive
// console.log(`tailFibb -- Expecting ${tailFibb(3)} to equal 1,1,2`);
// console.log(`tailFibb -- Expecting ${tailFibb(1)} to equal 1`);
// console.log(`tailFibb -- Expecting ${tailFibb(8)} to equal 1,1,2,3,5,8,13,21`);
// console.log(`tailFibb -- Expecting ${tailFibb(120)} to equal [something really huge]`);




//
