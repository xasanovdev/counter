const title = document.querySelector('.title');
const decrement = document.querySelector('.decrease');
const increment = document.querySelector('.increase');
const reset = document.querySelector('.reset');

let count = 0;

increment.addEventListener('click', function() {
    title.innerHTML = ++count;
});
decrement.addEventListener('click', function() {
    title.innerHTML = --count;
});
reset.addEventListener('click', function() {
    count = 0;
    title.innerHTML = count;
});