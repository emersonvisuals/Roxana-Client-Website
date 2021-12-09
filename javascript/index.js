// hamburger 

const burger = document.querySelector('.hamburger');
const links = document.querySelector('.links');
const items = document.querySelectorAll('.linksList');

burger.addEventListener('click', function(){
    console.log('clicked');
    links.classList.toggle('active');
    burger.classList.toggle('active');

    if (burger.classList.contains('active')){
        document.getElementsByTagName('body')[0].style = 'overflow: hidden';
    } else {
        document.getElementsByTagName('body')[0].style = 'overflow: scroll';
    }
});

/*
function clickOff() {
    if (onclick !== items) {
        links.classList.remove('active');
        burger.classList.remove('active');
    } else {
        return
    }
}

clickOff();
*/
