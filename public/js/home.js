//title double
let alertShow = false

if (document.title === "Home") {
    setInterval(() => {
        document.title =
            alertShow ? "Kitchening"
                : "Home"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "Contact") {
    setInterval(() => {
        document.title =
            alertShow ? "Kitchening"
                : "Contact"

        alertShow = !alertShow
    }, 1000)
}

if (document.title === "404") {
    setInterval(() => {
        document.title =
            alertShow ? "Kitchening"
                : "404"

        alertShow = !alertShow
    }, 1000)
}
//change color de las etiqueta a al pasar por encima de ellas

$("a").mouseenter(elem => {
    elem.target.style.color = "blue"
})
$("a").mouseleave(elem => {
    elem.target.style.color = "white"
})

//ocultar y mostrar main al hacer click sobre el boton servicios
// $("#btn__active3").click(() => {
//     $(".home__main").fadeOut()
// })

// $("#btn__active3").click(() => {
//     $(".home__main").fadeIn()
// })

$(".home__header--box-logo").click(() => {
    $(".home__main").is(":visible") ? $(".home__main").fadeOut() : $(".home__main").fadeIn();
});

//msj error 404 que se escribe solo
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element", {
        strings: ["ERROR 404, PAGE NOT FOUND!"],
    }).go();
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}