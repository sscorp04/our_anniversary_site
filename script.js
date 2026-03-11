// Page fade-in
window.addEventListener('DOMContentLoaded', () => { 
  document.body.classList.add('loaded'); 
});

// Letter paragraphs fade-in
function showLetterParagraphs() {
  const paragraphs = document.querySelectorAll(".letter-paragraph");
  paragraphs.forEach((p, i) => { setTimeout(()=>p.classList.add("visible"), i*1200); });
}

// Button to go to Love Letter page
function goToLoveLetter(){ window.location.href="loveletter.html"; }

// Background sparkles
function createBackgroundSparkle(){
  const sparkle=document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left=Math.random()*window.innerWidth+"px";
  sparkle.style.top=Math.random()*window.innerHeight+"px";
  sparkle.style.animationDuration=1+Math.random()*2+"s";
  document.querySelector(".sparkles").appendChild(sparkle);
  setTimeout(()=>sparkle.remove(),2000);
}

// Auto-generate sparkles
setInterval(createBackgroundSparkle,400);

// Trigger letter paragraph fade-in
if(document.getElementById("letter")) showLetterParagraphs();