let score = 0;
let worldRecord = localStorage.getItem('worldRecord') || 0; // Retrieve world record from localStorage

// Function to increment score when button is clicked
function increaseScore() {
    score++;
    document.getElementById('score').textContent = score;
    if (score > worldRecord) {
        // Update world record if the current score exceeds it
        worldRecord = score;
        localStorage.setItem('worldRecord', worldRecord);
        document.getElementById('worldRecord').textContent = worldRecord;
    }
}

// Function to increment view count
function incrementViewCount() {
    // Retrieve current view count from localStorage
    let viewCount = localStorage.getItem('viewCount');
    // If view count is null (first time visiting the page), set it to 1
    if (!viewCount) {
        viewCount = 1;
    } else {
        // Otherwise, increment view count by 1
        viewCount = parseInt(viewCount) + 1;
    }
    // Update view count in localStorage
    localStorage.setItem('viewCount', viewCount);
    // Display view count on the page
    document.getElementById('viewCount').textContent = viewCount;
}

// Increment view count on page load
window.onload = function() {
    incrementViewCount();
};

// Event listener for button click
document.getElementById('clickBtn').addEventListener('click', increaseScore);
