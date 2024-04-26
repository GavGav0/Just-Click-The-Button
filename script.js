// Initialize score
let score = 0;

// Function to increment score when button is clicked
function increaseScore() {
    score++;
    document.getElementById('score').textContent = score;
}

// Event listener for button click
document.getElementById('clickBtn').addEventListener('click', increaseScore);
