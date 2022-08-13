var slides = document.getElementsByClassName("mySlides");

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {

    var slides = document.getElementsByClassName("mySlides");
    if (slideIndex <= slides.length - 4 || slideIndex >= 1) {

        showSlides(slideIndex += n);
    }
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}