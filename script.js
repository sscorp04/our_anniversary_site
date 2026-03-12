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