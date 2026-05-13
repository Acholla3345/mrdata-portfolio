// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// YOUR FIREBASE CONFIG
const firebaseConfig = {

  apiKey: "PASTE_YOURS",

  authDomain: "PASTE_YOURS",

  projectId: "PASTE_YOURS",

  storageBucket: "PASTE_YOURS",

  messagingSenderId: "PASTE_YOURS",

  appId: "PASTE_YOURS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

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
  .addEventListener("submit", async function(e) {

    e.preventDefault();

    const name =
      document.querySelector('input[type="text"]').value;

    const email =
      document.querySelector('input[type="email"]').value;

    const message =
      document.querySelector("textarea").value;

    try {

      await addDoc(collection(db, "messages"), {

        name: name,

        email: email,

        message: message,

        createdAt: new Date()

      });

      alert("Message sent successfully!");

      document.getElementById("contactForm").reset();

    } catch (error) {

      alert("Error sending message");

      console.error(error);
    }
});
