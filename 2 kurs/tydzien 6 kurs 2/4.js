function porownanie() {
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  let c = Number(document.getElementById("c").value);
  
  let text = document.getElementById("wynik");
  
  const najmniejsza = Math.min(a, b, c);
  const najwieksza = Math.max(a, b, c);

  text.innerHTML = najmniejsza + " jest najmniejsza, a " + najwieksza + " jest największa.";
}

let button = document.getElementById("sprawdz");
button.addEventListener("click", porownanie);