function porownanie() {
  var input = document.getElementById("a");
  var value = input.value;
  var length = value.length;
  var kot = "kot";

  var taktak = " - wyraz ma co najmniej 6 znaków i kończy się napisem 'kot'";
  var taknie = " - wyraz ma co najmniej 6 znaków, ale nie kończy się napisem 'kot'";
  var nietak = " - wyraz nie ma co najmniej 6 znaków, ale kończy się napisem 'kot'";
  var nienie = " - wyraz nie ma co najmniej 6 znaków i nie kończy się napisem 'kot'";

  let wynik = document.getElementById("wynik");

  if (length >= 6 && value.endsWith(kot)) {
    wynik.textContent = value + taktak;
  } else if (length >= 6 && !value.endsWith(kot)) {
    wynik.textContent = value + taknie;
  } else if (length < 6 && value.endsWith(kot)) {
    wynik.textContent = value + nietak;
  } else {
    wynik.textContent = value + nienie;
  }
}

let button = document.getElementById("sprawdz");
button.addEventListener("click", porownanie);
