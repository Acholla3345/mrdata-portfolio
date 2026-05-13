// DARK MODE
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// TYPING EFFECT
const text = "MR.DATA";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 200);
  }
}

window.onload = typeEffect;

// CONTACT FORM
document
  .getElementById("contactForm")
  .addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Message sent successfully!");
});
