// Page fade-in
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});

// Love letter paragraph fade-in
function showLetterParagraphs() {
  const paragraphs = document.querySelectorAll(".letter-paragraph");
  paragraphs.forEach((p, i) => {
    setTimeout(() => p.classList.add("visible"), i * 1200);
  });
}

// Optional button to go directly to love letter page
function goToLoveLetter() {
  window.location.href = "loveletter.html";
}

// Floating hearts
function createHeartAt(x, y) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  heart.style.fontSize = 16 + Math.random() * 20 + "px";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

// Floating sparkles
function createBackgroundSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.top = Math.random() * window.innerHeight + "px";
  sparkle.style.animationDuration = 1 + Math.random() * 2 + "s";
  document.querySelector(".sparkles").appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 2000);
}

// Generate hearts & sparkles
setInterval(() => createHeartAt(Math.random() * window.innerWidth, window.innerHeight), 300);
setInterval(createBackgroundSparkle, 400);

// Trigger fade-in of paragraphs if on loveletter page
if (document.getElementById("letter")) showLetterParagraphs();

// Click/touch hearts
window.addEventListener("click", e => createHeartAt(e.clientX, e.clientY));
window.addEventListener("touchstart", e => {
  const touch = e.touches[0];
  createHeartAt(touch.clientX, touch.clientY);
});