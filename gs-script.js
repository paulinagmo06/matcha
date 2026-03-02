// JavaScript Document

//preparation button
const prepButton = document.getElementById("prep-button");
const prepSteps = document.getElementById("prep-steps");

prepButton.addEventListener("click", function() {
  prepSteps.classList.toggle("hidden");
});