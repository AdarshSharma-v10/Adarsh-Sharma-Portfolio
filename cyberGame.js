// Game state variables
let gameScore = 0;
let gameInterval;
let gameDuration = 15; // seconds
let orbTimeout;

// Start Game Logic
document.getElementById("startGameBtn").addEventListener("click", () => {
  gameScore = 0;
  document.getElementById("gameScore").textContent = gameScore;
  document.getElementById("gameTimerBar").style.width = "0%";

  let timeLeft = gameDuration;
  const gameBox = document.getElementById("orbZone");

  // Progress Bar Animation
  gameInterval = setInterval(() => {
    timeLeft--;
    const progress = ((gameDuration - timeLeft) / gameDuration) * 100;
    document.getElementById("gameTimerBar").style.width = `${progress}%`;

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      clearTimeout(orbTimeout);
      alert(`⏱ Time's up! Final Score: ${gameScore}`);
      gameBox.innerHTML = "";
    }
  }, 1000);

  spawnOrb();
});

// Spawn orb in random position
function spawnOrb() {
  const gameBox = document.getElementById("orbZone");
  gameBox.innerHTML = "";

  const orb = document.createElement("div");
  orb.classList.add("glow-orb");

  // Random position inside game box
  const maxX = gameBox.clientWidth - 30;
  const maxY = gameBox.clientHeight - 30;
  orb.style.left = `${Math.random() * maxX}px`;
  orb.style.top = `${Math.random() * maxY}px`;

  // Click = score
  orb.addEventListener("click", () => {
    gameScore++;
    document.getElementById("gameScore").textContent = gameScore;
    spawnOrb(); // Spawn next
  });

  gameBox.appendChild(orb);

  // Despawn orb if not clicked
  orbTimeout = setTimeout(() => {
    spawnOrb();
  }, 900); // Slower for smoother UX
}
