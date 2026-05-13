// ==========================
// FIREBASE CONFIG (PUT YOUR VALUES)
// ==========================
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_AUTH_DOMAIN",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_STORAGE_BUCKET",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


// ==========================
// DARK MODE
// ==========================
const toggleBtn = document.getElementById("darkModeToggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}


// ==========================
// TYPING EFFECT
// ==========================
const text = "MR.DATA";
let i = 0;

function typeEffect() {
  const el = document.querySelector(".typing");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 200);
  }
}

window.addEventListener("load", typeEffect);


// ==========================
// CONTACT FORM (FIREBASE)
// ==========================
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector("textarea").value;

    try {
      await db.collection("messages").add({
        name: name,
        email: email,
        message: message,
        createdAt: new Date()
      });

      alert("Message sent successfully ✅");

      form.reset();

    } catch (error) {
      console.error("Firebase Error:", error);
      alert("Message failed ❌ Check Firebase setup");
    }
  });
}
