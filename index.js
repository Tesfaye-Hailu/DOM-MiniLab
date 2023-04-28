
const heading = document.getElementById("heading");
const hideBtn = document.getElementById("hideBtn");
const unhideBtn = document.getElementById("unhideBtn");

heading.textContent = "Hello, Per Scholas Team!";

hideBtn.addEventListener("click", function() {
  heading.style.display = "none";
});

unhideBtn.addEventListener("click", function() {
  heading.style.display = "block";
});

    // show the h1 element after 3 seconds
  setTimeout(() => {
    h1Element.style.display = 'block';
  }, 3000);


