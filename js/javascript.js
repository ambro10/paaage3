function toggle(){
    var sec = document.getElementById('sec');
    var nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    nav.classList.toggle('active');
}


$(".menu-toggle").click(function(){
    $(".menu").toggleClass("active");
});

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

$(".galleryButton").click(function(){
    $("body, html").animate({
        scrollTop: $(".gallery-section").offset().top
    }, 1200);
})


function scrollMenu() {
    var deleteId = document.getElementById("menuToggle").removeAttribute("id");
    var x = document.getElementsByTagName("H1")[0].getAttribute("class");
}
$("body").scroll(function() {
    $("#menuToggle").addClass("nowa");
  });
