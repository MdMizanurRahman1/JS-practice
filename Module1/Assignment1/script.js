//1

console.log("I'm printing to console!");

//2
const userName=prompt("Please enter your name?");
document.body.innerHTML =`Hello, ${userName}!`;

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

//4
const name=prompt("Enter your name?");
const random=Math.floor(Math.random()*4)+1;

let house;

if (random===1){
    house="Gryffindor";
} else if (random===2){
    house="Slytherin";
} else if (random===3){
    house="Hufflepuff";
} else {
    house="Ravenclaw.";
}
document.body.innerHTML = `${name}, you are ${house}.`;

//5

const year = Number(prompt("Enter a year:"));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  document.body.innerHTML = "Leap year";
} else {
  document.body.innerHTML = "Not a leap year";
}

//7
const rolls = Number(prompt("How many dice rolls?"));
let sum2 = 0;

for (let i = 0; i < rolls; i++) {
  const dice = Math.floor(Math.random() * 6) + 1;
  sum2 += dice;
}

document.body.innerHTML = `Sum of dice rolls: ${sum2}`;
