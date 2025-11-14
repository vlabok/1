function magiczna_liczba() {
  let r = Math.random() * 100;
  let a = document.getElementById("a").value; // HTMLElemnt lub null
  if (!a) {
    document.getElementById("wynik").innerHTML = "wprowadz danne";
  } else {
    if (r <= 33) {
      document.getElementById("wynik").innerHTML =
        "Prawdopodobieństwo, że tak będzie wynosi: " + r + "%";
      wynik.style.color = "red";
    } else if (r > 33 && r <= 66) {
      document.getElementById("wynik").innerHTML =
        "Prawdopodobieństwo, że tak będzie wynosi: " + r + "%";
      wynik.style.color = "blue";
    } else if (r > 66) {
      document.getElementById("wynik").innerHTML =
        "Prawdopodobieństwo, że tak będzie wynosi: " + r + "%";
      wynik.style.color = "green";
    }
  }
}
let button = document.getElementById("sprawdz");
button.addEventListener("click", magiczna_liczba);
