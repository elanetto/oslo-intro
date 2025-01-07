// Description: This is a simple program to generate fibonicci series upto n numbers.
// 1 2 3 5 8 13 21 34 55 89

// the fibonicci function
function fibonacci(n) {
  let result = [];
  let a = 0;
  let b = 1;
  for (let i = 1; i <= n; i++) {
    result.push(a);
    let next = a + b;
    a = b;
    b = next;
  }
  return result;
}