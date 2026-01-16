const button = document.getElementById('themeToggle');
let theme = false;

if (sessionStorage.getItem('theme') === 'dark') {
    theme = true;
    document.body.classList.add('dark-mode');
}
if (localStorage.getItem('theme') === 'dark') {
    theme = true;
    document.body.classList.add('dark-mode');
}

darkmode();

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
    body.classList.toggle('dark-mode');
    if (theme) {
        sessionStorage.setItem('theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else { 
        sessionStorage.setItem('theme', 'light');
        localStorage.setItem('theme', 'light');
    }
})