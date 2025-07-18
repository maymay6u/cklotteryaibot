const lastNumbers = [5, 2, 8, 3, 4, 6, 9, 0, 7, 1, 5, 4, 3, 6, 2, 9, 0, 8, 1, 7];

function predictNext() {
  const input = document.getElementById("userInput").value;
  let predicted = 'Waiting...';

  if (input !== "") {
    const num = parseInt(input);
    const freq = new Array(10).fill(0);
    lastNumbers.forEach(n => freq[n]++);

    const max = Math.max(...freq);
    const likely = freq.map((v, i) => (v === max ? i : -1)).filter(i => i !== -1);
    const choice = likely[Math.floor(Math.random() * likely.length)];

    predicted = AI Guess: ${choice} — ${choice <= 4 ? 'Small (0–4)' : 'Big (5–9)'};
  }

  document.getElementById("aiOutput").textContent = predicted;
}