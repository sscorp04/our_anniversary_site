const sections = document.querySelectorAll(".section");

function showSections() {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    if(position < window.innerHeight - 100){
      section.classList.add("show");
    }
  });
}

// Run on scroll
window.addEventListener("scroll", showSections);

// Run on page load (so short pages also show)
window.addEventListener("load", showSections);

function showLove(){

  const message = document.getElementById("loveMessage");
  const button = document.getElementById("loveButton");

  message.style.display = "block";

  setTimeout(() => {
    message.style.opacity = "1";
  }, 50);

  button.innerText = "I knew it ❤️";

}

///// Live Countdown for countdown.html /////

const countdownDate = new Date("2027-03-12T00:00:00").getTime(); // set your target date

function updateCounter() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if(distance < 0){
    document.getElementById("counter").innerText = "Happy Anniversary! ❤️";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("counter").innerText = 
    `${days} days ${hours}h ${minutes}m ${seconds}s ❤️`;
}

// run immediately
updateCounter();

// update every second
const countdownInterval = setInterval(updateCounter, 1000);