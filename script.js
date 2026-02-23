// JavaScript Document
const button= document.getElementById("matchabutton");
const message= document.getElementById("matchamessage");

button.addEventListener("click", function() {
	message.classList.remove("hidden");
});