const arr = [1, 2, 3, 4, 5];

arr.forEach((item) => { // we have to loop through all items
  console.log(item);
});

for (const item of arr) {
    console.log(item);
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const newArr = arr.map((item) => { // we have to loop through all items. Map returns a new array
  console.log(item);
  return item * 2; // Here we are creating a new array that is double the size of the original array
});

arr.filter((item) => {
    console.log(item); 
});

arr.reduce((acc, item) => {
    console.log(acc, item);
});

arr.reduce((acc, item) => {
    console.log(acc, item);
}   , 0);

let i = 0; // we have to loop through all items
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}