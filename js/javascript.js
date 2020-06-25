function toggle(){
    var sec = document.getElementById('sec');
    var home = document.getElementById('home');
    var nav = document.getElementById('navigation');
    var serv = document.getElementById('services');
    var gal = document.getElementById('gallery');
    var galm = document.getElementById('gallerym');
    var con = document.getElementById('con');
    sec.classList.toggle('active');
    nav.classList.toggle('active');
    home.classList.toggle('active');
    serv.classList.toggle('active');
    gal.classList.toggle('active');
    galm.classList.toggle('active');
    con.classList.toggle('active');
}

function showMore() {
    var show = document.getElementById('show');
    show.classList.toggle('active');
}

function changeLanguagePL() {
    document.getElementById('listA').innerHTML = "O mnie";
    document.getElementById('listS').innerHTML = "Usługi";
    document.getElementById('listG').innerHTML = "Galeria";
    document.getElementById('listC').innerHTML = "Kontakt";
    document.getElementById('whoami').innerHTML = "Junior Frontend i Python developer, <br/> Licencjonowany operator statków bezzałogowych";
    document.getElementById('km').innerHTML = "Dowiedz się więcej";
    document.getElementById('welcome-title').innerHTML = "Miło mi Cię gościć na mojej stronie!";
    document.getElementById('htext1').innerHTML = "KILKA SŁÓW O MNIE";
    document.getElementById('htext2').innerHTML = "KIM JESTEM I CO ROBIĘ";
    document.getElementById('htext3').innerHTML = "Mam na imię Sebastian Ambrochowicz. <br/> Niedawno ukończyłem technikum informatyczne i obecnie planuję studiować na tym kierunku. <br/> Projektowanie stron, programowanie i ujęcia z drona to moje pasje i sposób na życie. <br/> Jeżeli zależy Ci na spójnych i miłych dla oczu projektach, to dobrze trafiłeś! <br/> Z przyjemnością przygotuję i prześlę wycenę.";
    document.getElementById('serv-title').innerHTML = "USŁUGI";
    document.getElementById('serv1').innerHTML = "TWORZENIE STRON INTERNETOWYCH";
    document.getElementById('serv1t').innerHTML = "The most I value transparency and functionality, so every page I create is characterized by this. The main languages ​​I use are: HTML, CSS, Javascript and various useful libraries.";
    document.getElementById('serv2').innerHTML = "ZARZĄDZANIE STRONĄ";
    document.getElementById('serv2t').innerHTML = "I will also be happy to undertake guidance or modification site already created for customer needs.";
    document.getElementById('serv3').innerHTML = "FILMOWANIE I FOTOGRAFOWANIE Z DRONA";
    document.getElementById('serv3t').innerHTML = "Od 2018 roku jestem licencjonowanym operatorem statków bezzałogowych, zarówno w zasięgu wzroku, jak i poza nim. Posiadam również doważenie na wielowirnikowce do 25kg wagi. Ujęcia wychodzące spod mojej ręki są profesjonalne, a co za tym idzie płynne i ciekawe.";
    document.getElementById('serv4').innerHTML = "DATA SCIENCE";
    document.getElementById('serv4t').innerHTML = "Jest to specjalizacja, którą postanowiłem wybrać na studiach ze względu na moje zaciekawienie językiem jakim jest Python. Uważam, że jest to niesamowicie interesująca dziedzina informatyki , którą chętnie wybrałbym w dalszym rozwoju.";
    document.getElementById('button').innerHTML = "Pokaż więcej";
    document.getElementById('gtitle').innerHTML = "Galeria";
    document.getElementById('ctitle').innerHTML = "Kontakt";
    document.getElementById('ctext').innerHTML = "Chcesz skorzystać z moich usług?<br/>Napisz do mnie!<br/>Postaram się możliwie szybko odpowiedzieć!</p><br/><p>Kontakt telefoniczny możliwy w godzinach 16-22</p></h4>";
    document.getElementById('ftitle').innerHTML = "Formularz kontaktowy";
    document.getElementById('ftext').innerHTML = "Skontaktuj się ze mną i dostań odpowiedź w ciągu 24h";
    document.getElementById('fma').innerHTML = "Twój adres e-mail";
    document.getElementById('fph').innerHTML = "Twój numer telefonu";
    document.getElementById('fsub').innerHTML = "Tytuł wiadomości";
    document.getElementById('msgcontent').innerHTML = "Treść wiadomości";
    document.getElementById('contact-submit').innerHTML = "Nie działa";
}

function changeLanguageENG() {
    document.getElementById('listA').innerHTML = "About";
    document.getElementById('listS').innerHTML = "Services";
    document.getElementById('listG').innerHTML = "Gallery";
    document.getElementById('listC').innerHTML = "Contact";
    document.getElementById('whoami').innerHTML = "Junior frontend and Python developer, <br/> Licensed Drone Operator";
    document.getElementById('km').innerHTML = "Know more";
    document.getElementById('welcome-title').innerHTML = "NICE TO HOST YOU ON MY WEBSITE!";
    document.getElementById('htext1').innerHTML = "FEW WORDS ABOUT ME";
    document.getElementById('htext2').innerHTML = "SO WHO AM I AND WHAT DO I DO?";
    document.getElementById('htext3').innerHTML = "My name is Sebastian Ambrochowicz. <br/>I have recently finished technical college and currently I will plan to study in this field. </br>Designing websites, programming and drone footage are my passions and way of life. <br/>If you care about coherent and eye-catching projects, you've come to the right place! <br/> I will gladly prepare and send a quote.";
    document.getElementById('serv-title').innerHTML = "SERVICES";
    document.getElementById('serv1').innerHTML = "CREATING SITES";
    document.getElementById('serv1t').innerHTML = "The most I value transparency and functionality, so every page I create is characterized by this. The main languages ​​I use are: HTML, CSS, Javascript and various useful libraries.";
    document.getElementById('serv2').innerHTML = "WEBSITE MANAGEMENT";
    document.getElementById('serv2t').innerHTML = "I will also be happy to undertake guidance or modification site already created for customer needs.";
    document.getElementById('serv3').innerHTML = "FILMING AND DRONE SHOOTING";
    document.getElementById('serv3t').innerHTML = "I have been a licensed operator of unmanned aerial ships since 2018, both in sight and out of sight. I also have a check-in for multirotors up to 25 kg in weight. The shots from my hand are professional, and hence smooth and interesting.";
    document.getElementById('serv4').innerHTML = "DATA SCIENCE";
    document.getElementById('serv4t').innerHTML = "This is a specialization that I decided to choose in college because of my interest in the language that is Python. I think that this is an extremely interesting field of computer science, which I would gladly choose in further development.";
    document.getElementById('button').innerHTML = "Show more";
    document.getElementById('gtitle').innerHTML = "Gallery";
    document.getElementById('ctitle').innerHTML = "Contact";
    document.getElementById('ctext').innerHTML = "Do you want to use my services? <br/>Write to me! <br/>I will try to answer as soon as possible! </p> <br/><p> Contact by phone possible between 16-22 </p> </h4>";
    document.getElementById('ftitle').innerHTML = "Contact form";
    document.getElementById('ftext').innerHTML = "Contact me and get a reply within 24 hours";
    document.getElementById('fma').innerHTML = "Your address e-mail";
    document.getElementById('fph').innerHTML = "Your phone number";
    document.getElementById('fsub').innerHTML = "Subject";
    document.getElementById('msgcontent').innerHTML = "Message content";
    document.getElementById('contact-submit').innerHTML = "Not working";









}






$(".menu-toggle").click(function(){
    $(".menu").toggleClass("active");
});

$(".gallery-link").click(function(){
    $("body, html").animate({
        scrollTop: $(".gallery").offset().top
    }, 800);
})

$(".contact-link").click(function(){
    $("body, html").animate({
        scrollTop: $(".contact").offset().top
    }, 800);
})

$(".galleryButton").click(function(){
    $("body, html").animate({
        scrollTop: $(".gallery-section").offset().top
    }, 800);
})


function scrollMenu() {
    var deleteId = document.getElementById("menuToggle").removeAttribute("id");
    var x = document.getElementsByTagName("H1")[0].getAttribute("class");
}
$("body").scroll(function() {
    $("#menuToggle").addClass("nowa");
  });
