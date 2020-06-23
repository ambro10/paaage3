
$(".gallery-link").click(function(){
    $("body, html").animate({
        scrollTop: $(".gallery").offset().top
    }, 1200);
})


$(".contact-link").click(function(){
    $("body, html").animate({
        scrollTop: $(".contact").offset().top
    }, 1200);
})
$(".services-link").click(function(){
  $("body, html").animate({
      scrollTop: $(".services-section").offset().top
  }, 1200);
})
$(".main-link").click(function(){
  $("body, html").animate({
      scrollTop: $(".main-description").offset().top
  }, 1200);
})

$(".nav-title").click(function(){
  $("body, html").animate({
      scrollTop: $(".header").offset().top
  }, 1200);
})

$(".galleryButton").click(function(){
    $("body, html").animate({
        scrollTop: $(".gallery-section").offset().top
    }, 1200);
})


const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 7000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";


$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('nav').toggleClass("active")
  })
})