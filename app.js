//Menu Icon
const menu  = document.getElementById('nav-links');


function showMenu(){
    show.style.right = "0";
    console.log('clicked')
 }
 
 function closeMenu(){
    show.style.right = "-200px";
    console.log('clicked me')
 }


//----- IMAGE SLIDER ----
let slideImg = document.getElementById('slideImg');

let images = new Array(
      "images/img-1.jpg",
      "images/img-2.jpg",
      "images/img-3.jpg",
      "images/img-4.jpg",
);

let len = images.length;

let i = 0;

function slider(){
    if(i > len-1){
        i = 0;
    }

    slideImg.src = images[i]; i++;
    setTimeout('slider()', 3000);
}