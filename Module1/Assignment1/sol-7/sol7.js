//7
const rolls = Number(prompt("How many dice rolls?"));
let sum2 = 0;

for (let i = 0; i < rolls; i++) {
  const dice = Math.floor(Math.random() * 6) + 1;
  sum2 += dice;
}

document.body.innerHTML = `Sum of dice rolls: ${sum2}`;
