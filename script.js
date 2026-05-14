// DARK MODE
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// TYPING EFFECT
const text = "MR.DATA";
let i = 0;

function typeEffect() {
  const el = document.querySelector(".typing");

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 200);
  }
}

window.onload = typeEffect;
