const button = document.getElementById('themeToggle');
let theme = false;

function darkmode(){
    if (theme){
        button.innerText =  "Dark mode";
    }else{
        button.innerText =  "White mode";
    }
}

button.addEventListener('click', function(){
    let body = document.getElementsByTagName('body')[0];
    theme = !theme;
    darkmode();
    body.classList.toggle('dark-mode');
})