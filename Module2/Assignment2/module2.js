//1

const numbers = [];

for (let i = 0; i < 5; i++) {
  const num = Number(prompt("Enter a number:"));
  numbers.push(num);
}

for (let i = 4; i >= 0; i--) {
  console.log(numbers[i]);
}


//2

const count = Number(prompt("Number of participants:"));
const names = [];

for (let i = 0; i < count; i++) {
  names.push(prompt("Enter your name:"));
}

names.sort();

let list = "<ol>";
for (let name of names) {
  list += `<li>${name}</li>`;
}
list += "</ol>";

document.body.innerHTML = list;


//3
const dogs = [];

for (let i = 0; i < 6; i++) {
  dogs.push(prompt("Enter dog name:"));
}

dogs.sort().reverse();

let lists = "<ul>";
for (let dog of dogs) {
  lists += `<li>${dog}</li>`;
}
lists += "</ul>";

document.body.innerHTML = lists;


//4
const numbers2 = [];

while (true) {
  const num = Number(prompt("Enter number (0 to stop):"));
  if (num === 0) break;
  numbers2.push(num);
}

numbers2.sort((a, b) => b - a);

console.log(numbers2);



//5
const numbers3 = [];

while (true) {
  const num = Number(prompt("Enter the number:"));

  if (numbers3.includes(num)) {
    alert("Number already given!");
    break;
  }

  numbers3.push(num);
}

numbers3.sort((a, b) => a - b);

console.log(numbers3);


//6

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let listUl = "<ul>";

while (true) {
  const result = rollDice();
  listUl += `<li>${result}</li>`;
  if (result === 6) break;
}

listUl += "</ul>";

document.body.innerHTML = listUl;


//8
function concat(array) {
  let result = "";
  for (let item of array) {
    result += item;
  }
  return result;
}

const namesList = ["Johnny", "DeeDee", "Joey", "Marky"];

document.body.innerHTML = concat(namesList);

