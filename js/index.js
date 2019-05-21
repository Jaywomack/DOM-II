// Your code goes here

//MouseOver EventListener
const navLogo = document.querySelector('.logo-heading');
navLogo.addEventListener('mouseover', event => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '200';
    event.target.style.color = 'green';
}); 

//Make Home button Opaque
const homeAuxClick = document.querySelector('nav a');
homeAuxClick.addEventListener('auxclick', event => {
    event.target.style.opacity = '0.5';
});

//Make head image circular and add a border on mouseenter
const busImg = document.getElementById('header-img');
busImg.addEventListener('mouseenter', event => {
    event.target.style.borderRadius = '50%'; 
    event.target.style.border = '3px solid black'; 
});
//Make image return to rectangle with grey border
busImg.addEventListener('mouseleave', event => {
    event.target.style.border = '3px solid grey'; 
    event.target.style.borderRadius = '0%';
})







