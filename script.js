let score = 0;
let worldRecord = localStorage.getItem('worldRecord') || 0;
let views = localStorage.getItem('viewCount') || 0;

// Function to increment score when button is clicked
function increaseScore() {
    score++;
    document.getElementById('score').textContent = score;
    updateWorldRecord(); // Check and update world record
}

// Function to update world record
function updateWorldRecord() {
    if (score > worldRecord) {
        // Update world record if the current score exceeds it
        worldRecord = score;
        localStorage.setItem('worldRecord', worldRecord);
        document.getElementById('worldRecord').textContent = worldRecord;
    }
}

// Function to increment view count
function incrementViewCount() {
    views++;
    localStorage.setItem('viewCount', views);
    document.getElementById('viewCount').textContent = views;
}

// Increment view count on page load
window.onload = function() {
    incrementViewCount();
    document.getElementById('worldRecord').textContent = worldRecord;
};

// Event listener for button click
document.getElementById('clickBtn').addEventListener('click', increaseScore);
