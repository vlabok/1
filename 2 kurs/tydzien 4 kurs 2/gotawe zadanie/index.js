const button = document.getElementById("sprawdz");
const input = document.getElementById("inputt");

button.addEventListener("click", function () {
  const haslo = input.value.trim();

  if (haslo === "") {
    wynik.textContent = "WPISZ HASŁO!";
    wynik.style.color = "red";
  } else if (haslo.length < 5) {
    wynik.textContent = "SŁABE";
    wynik.style.color = "orange";
  } else if (haslo.length < 10) {
    wynik.textContent = "ŚREDNIE";
    wynik.style.color = "blue";
  } else if (haslo.length < 18) {
    wynik.textContent = "DOBRE";
    wynik.style.color = "greenyellow";
  } else {
    wynik.textContent = "BARDZO DOBRE";
    wynik.style.color = "green";
  }
});
