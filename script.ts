class Character {
    constructor() {
        this.position = 0;
    }

    move() {
        this.position++;
        document.getElementById('position').innerText = this.position;
    }
}

class MathProblem {
    static generateProblem() {
        let a = Math.floor(Math.random() * 10) + 1;
        let b = Math.floor(Math.random() * 10) + 1;
        let operators = ['+', '-', '*', '/'];
        let op = operators[Math.floor(Math.random() * operators.length)];
        if (op === '/' && b === 0) b = 1;  // Eviter la division par zéro
        let answer = eval(`${a} ${op} ${b}`);
        return { question: `${a} ${op} ${b} = ?`, answer: op === '/' ? parseFloat(answer.toFixed(2)) : Math.floor(answer) };
    }
}

const character = new Character();
let currentProblem = MathProblem.generateProblem();

function updateQuestion() {
    document.getElementById('question').innerText = currentProblem.question;
}

function submitAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    if (userAnswer === currentProblem.answer) {
        document.getElementById('feedback').innerText = "Bonne réponse!";
        character.move();
    } else {
        document.getElementById('feedback').innerText = "Mauvaise réponse!";
    }
    currentProblem = MathProblem.generateProblem();
    updateQuestion();
    document.getElementById('answer').value = ''; // Clear the input after submission
}

document.addEventListener('DOMContentLoaded', () => {
    updateQuestion();
});
