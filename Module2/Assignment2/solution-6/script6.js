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
