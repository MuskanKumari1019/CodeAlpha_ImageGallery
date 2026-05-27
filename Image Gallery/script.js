const filterButtons =
document.querySelectorAll(".filter-buttons button");

const images =
document.querySelectorAll(".image");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelector(".active")
.classList.remove("active");

button.classList.add("active");

const filter=button.dataset.filter;

images.forEach(image=>{

if(filter==="all" ||
image.classList.contains(filter)){

image.style.display="block";

}else{

image.style.display="none";

}

});

});

});

/* Lightbox */

const lightbox=
document.querySelector(".lightbox");

const lightboxImg=
document.querySelector(".lightbox-img");

const closeBtn=
document.querySelector(".close");

const nextBtn=
document.querySelector(".next");

const prevBtn=
document.querySelector(".prev");

const imgArray=
Array.from(document.querySelectorAll(".gallery img"));

let currentIndex=0;

imgArray.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentIndex=index;
showImage();
lightbox.style.display="flex";

});

});

function showImage(){

lightboxImg.src=
imgArray[currentIndex].src;

}

nextBtn.addEventListener("click",()=>{

currentIndex=
(currentIndex+1)%imgArray.length;

showImage();

});

prevBtn.addEventListener("click",()=>{

currentIndex=
(currentIndex-1+imgArray.length)%imgArray.length;

showImage();

});

closeBtn.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});

/* Keyboard */

document.addEventListener("keydown",(e)=>{

if(lightbox.style.display==="flex"){

if(e.key==="ArrowRight"){

currentIndex=
(currentIndex+1)%imgArray.length;

showImage();

}

if(e.key==="ArrowLeft"){

currentIndex=
(currentIndex-1+imgArray.length)%imgArray.length;

showImage();

}

if(e.key==="Escape"){

lightbox.style.display="none";

}

}

});