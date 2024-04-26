// Initialize score, world record, and views
let score = 0;
let worldRecord = 0;
let views = 0;

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
        // Store world record in Cloudflare Workers KV
        event.waitUntil(CLOUDFLARE_KV.put('worldRecord', worldRecord.toString()));
        document.getElementById('worldRecord').textContent = worldRecord;
    }
}

// Function to increment view count
async function incrementViewCount() {
    views++;
    // Store view count in Cloudflare Workers KV
    await CLOUDFLARE_KV.put('viewCount', views.toString());
    document.getElementById('viewCount').textContent = views;
}

// Load world record and view count from Cloudflare Workers KV
async function loadGameData() {
    // Retrieve world record
    const storedWorldRecord = await CLOUDFLARE_KV.get('worldRecord');
    if (storedWorldRecord) {
        worldRecord = parseInt(storedWorldRecord);
        document.getElementById('worldRecord').textContent = worldRecord;
    }
    // Retrieve view count
    const storedViews = await CLOUDFLARE_KV.get('viewCount');
    if (storedViews) {
        views = parseInt(storedViews);
        document.getElementById('viewCount').textContent = views;
    }
}

// Increment view count on page load
window.onload = function() {
    incrementViewCount();
    loadGameData(); // Load world record and view count from Cloudflare Workers KV
};

// Event listener for button click
document.getElementById('clickBtn').addEventListener('click', increaseScore);
