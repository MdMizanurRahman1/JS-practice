//3
const integer1= Number( prompt("Please enter one integer number?"))
const integer2= Number( prompt("Please enter 2nd integer number?"))
const integer3=Number( prompt("Please enter 3rd integer number?"))


const sum=integer1+integer2+integer3;

const product= integer1*integer2*integer3;

const average=sum/3;

document.body.innerHTML = `
Sum: ${sum} <br>
Product: ${product} <br>
Average: ${average.toFixed(2)}
`;
