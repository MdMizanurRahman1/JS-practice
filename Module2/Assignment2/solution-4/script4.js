
//4
const numbers2 = [];

while (true) {
  const num = Number(prompt("Enter number (0 to stop):"));
  if (num === 0) break;
  numbers2.push(num);
}

numbers2.sort((a, b) => b - a);

console.log(numbers2);

