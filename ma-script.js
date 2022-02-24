
// navbar
var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.top = "-50px";

menuBtn.onclick = function(){
    if(sideNav.style.top == "-50px"){
        sideNav.style.top = "0";
        menu.src = "./Pics/close.png";
    }
    else{
        sideNav.style.top = "-50px"
        menu.src = "./Pics/icon.png";
    }
} 

//slideshows
var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2","mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 2) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}