// ðŸŒ¿ MATCHA QUOTE API
const quoteBtn = document.getElementById("quote-btn");
const quoteText = document.getElementById("quote-text");

quoteBtn.addEventListener("click", function() {
  fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      quoteText.textContent = data.content;
    })
    .catch(error => {
      quoteText.textContent = "stay calm and drink matcha";
    });
});
// JavaScript Document