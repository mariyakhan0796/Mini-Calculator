//input two numbers from the user
var firstNumber = prompt('Enter First Number');
var secondNumber = prompt('Enter Second Number');

firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);


// input type of operation
var typeOfOperation =  prompt('Enter Type of Operation'); 

var result = 0;

if(typeOfOperation == '+'){
    result = firstNumber + secondNumber;
    console.log(firstNumber + ' + ' +  secondNumber + ' = ' + result);
}
if(typeOfOperation == '-'){
    result = firstNumber - secondNumber;
    console.log(firstNumber + ' - ' +  secondNumber + ' = ' + result);
}
if(typeOfOperation == '*'){
    result = firstNumber * secondNumber;
    console.log(firstNumber + ' * ' +  secondNumber + ' = ' + result);
}
if(typeOfOperation == '/'){
    result = firstNumber / secondNumber;
    console.log(firstNumber + ' / ' +  secondNumber + ' = ' + result);
}