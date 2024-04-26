let score = 0;

// Function to increment score when button is clicked
function increaseScore() {
    score++;
    document.getElementById('score').textContent = score;
    updateWorldRecord(); // Check and update world record
}

// Function to update world record
function updateWorldRecord() {
    let worldRecord = localStorage.getItem('worldRecord') || 0;
    if (score > worldRecord) {
        // Update world record if the current score exceeds it
        localStorage.setItem('worldRecord', score);
        document.getElementById('worldRecord').textContent = score;
    }
}

// Event listener for button click
document.getElementById('clickBtn').addEventListener('click', increaseScore);
