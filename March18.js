const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
function checkGuess(guess) {
    attempts++;

    if (guess === targetNumber) {
        return `Chúc mừng! Bạn đã đoán đúng số ${targetNumber} sau ${attempts} lần.`;
    } else if (guess < targetNumber) {
        return "Số bạn đoán nhỏ hơn số cần tìm.";
    } else {
        return "Số bạn đoán lớn hơn số cần tìm.";
    }
}
console.log(checkGuess(50));
console.log(checkGuess(80));
console.log(checkGuess(30));
console.log(checkGuess(targetNumber));