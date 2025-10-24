const button = document.getElementById("sprawdz");
const input = document.getElementById("inputt");

button.addEventListener("click", function () {
  const haslo = input.value;

  const maCyfre = /\d/.test(haslo);
  const maSpecjalny = /[!@#$%^&*(),.?":{}|<>]/.test(haslo);
  const maDuzaLitere = /[A-Z]/.test(haslo);

  if (haslo === "") {
    wynik.textContent = "WPISZ HASŁO!";
    wynik.style.color = "red";
  } else if (haslo.length >= 18 && maCyfre && maSpecjalny && maDuzaLitere) {
    wynik.textContent = "BARDZO DOBRY";
    wynik.style.color = "green";
  } else if (haslo.length >= 10 && haslo.length <= 17 && maCyfre) {
    wynik.textContent = "DOBRY";
    wynik.style.color = "greenyellow";
  } else if (haslo.length >= 5 && haslo.length <= 9) {
    wynik.textContent = "ŚREDNI";
    wynik.style.color = "blue";
  } else {
    wynik.textContent = "SŁABY";
    wynik.style.color = "orange";
  }
});
