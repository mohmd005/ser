let icon = document.querySelector('.icon');
let search = document.querySelector('.search');
let clear = document.querySelector('.clear');
let input = document.querySelector('input');

icon.onclick = function() {
    search.classList.toggle('active');
};

clear.onclick = function() {
    input.value = '';
};


// Code in Github : https://github.com/mohmd005/Category--listt.git