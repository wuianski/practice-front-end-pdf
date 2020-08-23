// slides
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// When the user clicks on bt1, open the popup intro slides.
function popUp1() {
    var popup = document.getElementById("popup_slide");
    popup.style.display = "block";
    //popup.classList.toggle("show");
    var popup_share = document.getElementById("popup_share");
    popup_share.style.display = "none";
}

// When the user clicks on bt2, open the popup share element.
function popUp2() {
    var popup_share = document.getElementById("popup_share");
    popup_share.style.display = "block";
    //popup_share.classList.toggle("show2");
    var popup = document.getElementById("popup_slide");
    popup.style.display = "none";
}

// Close share element.
function close_share() {
    var popup_share = document.getElementById("popup_share");
    popup_share.style.display = "none";
}

// Close share element.
function download_pdf() {
    var popup_share = document.getElementById("popup_share");
    popup_share.style.display = "none";
}

// Close share element.
function share_img() {
    var popup_share = document.getElementById("popup_share");
    popup_share.style.display = "none";
}