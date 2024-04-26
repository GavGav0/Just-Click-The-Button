// Initialize score and personal best
let score = 0;
let personalBest = localStorage.getItem('personalBest') || 0;

// Function to increment score when button is clicked
function increaseScore() {
    score++;
    document.getElementById('score').textContent = score;
    updatePersonalBest(); // Check and update personal best
}

// Function to update personal best
function updatePersonalBest() {
    if (score > personalBest) {
        // Update personal best if the current score exceeds it
        personalBest = score;
        localStorage.setItem('personalBest', personalBest);
        document.getElementById('personalBest').textContent = personalBest;
    }
}

// Increment personal best on page load
window.onload = function() {
    document.getElementById('personalBest').textContent = personalBest;
};

// Event listener for button click
document.getElementById('clickBtn').addEventListener('click', increaseScore);
