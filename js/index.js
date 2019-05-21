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
    event.stopPropagation()
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

//Hide img on double click
let mapImg = document.getElementById('map-img');
mapImg.addEventListener('dblclick', event => {
    event.target.style.display = 'none';
});

//Turn first h2 red when clicked
let allParagraphs = document.querySelector('h2');

allParagraphs.addEventListener('click', event => {
    event.target.style.color = 'red';
});

//If you copy from the Fun in the Sun Paragraph
//It converts to uppercase
const funInTheSunToUpperCase = document.querySelector('.destination');

funInTheSunToUpperCase.addEventListener('copy', event => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});

//When button is pushed the date is logged to the console
let dateBtn = document.getElementById('myBtn');

dateBtn.addEventListener('click', displayDate => {
    console.log(Date())
});


//Mouse move over a links turns them purple
let aLinks = document.querySelector('nav');
aLinks.addEventListener('mousemove', event => {
    event.target.style.color = 'purple'
});



//When a key is pressed
let keyDown1 = document.querySelector("body");
keyDown1.addEventListener('keydown', event => {
    alert(`${event.code}`)

});