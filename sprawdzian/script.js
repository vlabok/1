
  function bmi(){
  let waga = document.getElementById("waga").value;
  let wzrost = document.getElementById("wzrost").value;
  wzrost = wzrost/100;
  BMI = waga / (wzrost)^2;
  if (waga == '' || wzrost == '') {
    document.getElementById("wynik").innerHTML = "Wprowadź poprawne dane!";
    wynik.style.color = "red";
  } 
   if (wzrost <= 0) {
    document.getElementById("wynik").innerHTML = "Ty głuptasie ^_o!";
    wynik.style.color = "pink";
  }
  if(BMI < 18.5){
    document.getElementById("wynik").innerHTML = "Twoje BMI wynosi: Klasyfikacja: Niedowaga";
    wynik.style.color = "blue";
  }else if(BMI > 18.5 && BMI < 24.9){
    document.getElementById("wynik").innerHTML = "Twoje BMI wynosi: Klasyfikacja: Waga prawidłowa";
    wynik.style.color = "green";
  }else if(BMI > 25 && BMI < 29.9){
    document.getElementById("wynik").innerHTML = "Twoje BMI wynosi: Klasyfikacja: Klasyfikacja: Nadwaga";
    wynik.style.color = "orange";
  }else if(BMI > 30 ){
    document.getElementById("wynik").innerHTML = "Twoje BMI wynosi: Klasyfikacja: Klasyfikacja: Otyłość";
    wynik.style.color = "red";
  }
  }
let button = document.getElementById("sprawdz");
button.addEventListener("click", bmi);