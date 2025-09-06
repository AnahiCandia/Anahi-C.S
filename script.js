document.addEventListener("DOMContentLoaded", function () {
  let numeroSecreto = Math.floor(Math.random() * 10) + 1; // número entre 1 y 10
  const inputNumero = document.getElementById("inputNumero");
  const btnAdivinar = document.getElementById("btnAdivinar");
  const btnReiniciar = document.getElementById("btnReiniciar");
  const resultado = document.getElementById("resultado");

  // Intentar adivinar
  btnAdivinar.addEventListener("click", function () {
    const intento = parseInt(inputNumero.value);

    if (isNaN(intento) || intento < 1 || intento > 10) {
      resultado.textContent = "Por favor, escribe un número válido entre 1 y 10.";
      resultado.style.color = "red";
      return;
    }

    if (intento === numeroSecreto) {
      resultado.textContent = "🎉 ¡Felicidades Anahi! Adivinaste el número 🎉";
      resultado.style.color = "green";
    } else if (intento < numeroSecreto) {
      resultado.textContent = "El número secreto es mayor ⬆️";
      resultado.style.color = "blue";
    } else {
      resultado.textContent = "El número secreto es menor ⬇️";
      resultado.style.color = "orange";
    }
  });

  // Reiniciar juego
  btnReiniciar.addEventListener("click", function () {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    resultado.textContent = "Nuevo juego iniciado 🎲 ¡Intenta adivinar!";
    resultado.style.color = "black";
    inputNumero.value = "";
  });
});
