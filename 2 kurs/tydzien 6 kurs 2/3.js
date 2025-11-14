function zmien() {
  let str1 = document.getElementById("str1").value;
  let str2 = document.getElementById("str2").value;
  let text = document.getElementById("text");
  let newWord1 = str2[0] + str1.slice(1);
  let newWord2 = str1[0] + str2.slice(1);
  if (str1.length === 0 || str2.length === 0) {
    text.innerHTML = "Wprowadź oba słowa!";
    
  } else {
     text.innerHTML = newWord1 + " " + newWord2;
  }
}
let button = document.getElementById("sprawdz");
button.addEventListener("click", zmien);
