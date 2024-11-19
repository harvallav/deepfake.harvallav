/// Get references to the elements
const player = document.getElementById('player');
const startPoint = document.getElementById('start-point');
const endPoint = document.getElementById('end-point');
let isAtStart = true;

// Function to move the player to point A or B
function movePlayer() {
    if (isAtStart) {
        // Move player from point A to point B
        player.style.transform = `translate(${endPoint.offsetLeft - player.offsetWidth / 2}px, ${endPoint.offsetTop - player.offsetHeight / 2}px)`;
    } else {
        // Move player from point B to point A
        player.style.transform = `translate(${startPoint.offsetLeft - player.offsetWidth / 2}px, ${startPoint.offsetTop - player.offsetHeight / 2}px)`;
    }
    isAtStart = !isAtStart;
}

// Initialize player at point A
player.style.transform = `translate(${startPoint.offsetLeft - player.offsetWidth / 2}px, ${startPoint.offsetTop - player.offsetHeight / 2}px)`;

// Event listener to move the player on click
document.getElementById('game-container').addEventListener('click', movePlayer);
