let przycisk = document.getElementById('przycisk');
let element_div = document.getElementById('element_div');
let element_span = document.getElementById('element_span');


przycisk.addEventListener('click', function() {
    element_div.innerText = this.id;
});

element_div.addEventListener('click', function() {
    element_div.innerText =this.id;
});

element_span.addEventListener('click', function() {
    element_div.innerText = this.id;
});
