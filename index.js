console.log('Hello, world!');

// use input-1 field to get the input value
const input1 = document.getElementById('input-1');

// use input-2 field to get the input value
const input2 = document.getElementById('input-2');

// use the btn-run button to run the code
const btnRun = document.getElementById('btn-run');

// when clicking on the button, print the input value in the console
btnRun.addEventListener('click', () => {
  console.log(input1.value);
});

// when clicking on the button, print the input value input-1 + input-2 in the console
btnRun.addEventListener('click', () => {
  console.log(input1.value + input2.value);
});

// when clicking on the button, print the input value input-1 + input-2 in the console. Make the inputs and the value a number.
btnRun.addEventListener('click', () => {
  console.log(Number(input1.value) + Number(input2.value));
});

// Ludvig used parse int instead of Number
btnRun.addEventListener('click', () => {
  console.log(parseInt(input1.value) + parseInt(input2.value));
});

// only allow numbers in the input fields
input1.addEventListener('input', () => {
  input1.value = input1.value.replace(/\D/g, '');
});

function sumValues(num1, num2) {
    if (/[a-zA-Z]/.test(num1.toString()) || /[a-zA-Z]/.test(num2.toString())) {
        console.error("Error: Inputs must be numbers without letters.");
    } else {
        const result = Number(num1) + Number(num2);
        console.log("Result:", result);
    }
}

btnRun.addEventListener('click', () => {
    sumValues(input1.value, input2.value);
});

function summaryValues(num1, num2) {
    console.log(typeof num1, typeof num2);
}

function sumValues(num1, num2) {
	const res = Number(num1) + Number(num2);
	if (!isNaN(res)) {
		console.log(res);
	} else {
		console.error("error");
	}
}