
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
