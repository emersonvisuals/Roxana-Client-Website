// hamburger 

const burger = document.querySelector('.hamburger');
const burgerTrigger = document.querySelector('.hamburgerTrigger');
const links = document.querySelector('.links');
const items = document.querySelectorAll('.linksList');

const home = document.querySelector('a.homeContainer');
const about = document.querySelector('a.aboutContainer');
const projects = document.querySelector('a.projectsContainer');
const contact = document.querySelector('a.contactContainer');

console.log(home);

console.log(burger);

burgerTrigger.addEventListener('click', function(){
    console.log('clicked');
    links.classList.toggle('active');
    burger.classList.toggle('active');

    if (burger.classList.contains('active')){
        document.getElementsByTagName('body')[0].style = 'overflow: hidden';
    } else {
        document.getElementsByTagName('body')[0].style = 'overflow: scroll';
    }
});
