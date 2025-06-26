const text = ["a Developer", "a Designer", "a Coder","Video editor"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const typedText = document.getElementById("typed-text");
  currentText = text[i];

  if (!isDeleting) {
    typedText.textContent = currentText.substring(0, j++);
    if (j > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    typedText.textContent = currentText.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", type);
document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".stars");
  stars.forEach((el) => {
    const rating = parseInt(el.getAttribute("data-rating"));
    el.innerHTML = "★".repeat(rating) + "☆".repeat(5 - rating);
  });

  type(); // Keep your typing effect working
});
