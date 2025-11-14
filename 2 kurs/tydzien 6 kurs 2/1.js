function pole_trujkonta() {
    let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  if (a + b > c && a + c > b && b + c > a) {
    let p = (a + b + c) / 2;
    let P = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    document.getElementById("result").innerHTML = P;
  } else {
    document.getElementById("result").innerHTML = 'Z podanych boków nie sposób utworzyć trójkąta!';
  }
}
let button = document.getElementById("sprawdz");
button.addEventListener("click", pole_trujkonta);
