// JavaScript Document
const button= document.getElementById("matchabutton");
const message= document.getElementById("matchamessage");

button.addEventListener("click", function() {
	message.classList.remove("hidden");

		let duration = 6 * 1000;
		let end = Date.now() + duration;

(function frame() {
  confetti({
    particleCount: 6,
    startVelocity: 3,
    spread: 360,
    ticks: 300,
    gravity: 0.4,
    drift: 0.5,
    scalar: 0.6, // makes particles smaller
    origin: { x: Math.random(), y: 0 },
    colors: [
      "#36522A",  // deep matcha
      "#4E6B33",  // earthy green
      "#6E8B3D",  // fresh matcha
      "#A3B18A"   // soft sage
    ]
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();
	
});

// 🌿 MATCHA QUOTE API
const quoteBtn = document.getElementById("quote-btn");
const quoteText = document.getElementById("quote-text");

quoteBtn.addEventListener("click", function() {
  fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      quoteText.textContent = data.content;
    })
    .catch(error => {
      quoteText.textContent = "stay calm and drink matcha 🍵";
    });
});

	