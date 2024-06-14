/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const primerArray = ["♦", "♥", "♠", "♣"];
  const segundoArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  const simbolos = Math.floor(Math.random() * primerArray.length);
  const numeros = Math.floor(Math.random() * segundoArray.length);

  const simboloSeleccionado = primerArray[simbolos];
  const numeroSeleccionado = segundoArray[numeros];

  document.getElementById("simbolo").innerHTML = simboloSeleccionado;
  document.getElementById("numerosAleatorios").innerHTML = numeroSeleccionado;
  document.getElementById("simboloSegundo").innerHTML = simboloSeleccionado;

  if (simboloSeleccionado === "♥" || simboloSeleccionado === "♦") {
    document.getElementById("simbolo").classList.add("red");
    document.getElementById("simboloSegundo").classList.add("red");
  } else {
    document.getElementById("simbolo").classList.add("black");
    document.getElementById("simboloSegundo").classList.add("black");
  }
};
