// JavaScript Document
const canvas = document.getElementById("matchaCanvas");
const ctx = canvas.getContext("2d");

// draw a matcha bowl (circle)
ctx.beginPath();
ctx.arc(150, 120, 60, 0, Math.PI * 2);
ctx.fillStyle = "#6E8B3D";
ctx.fill();
