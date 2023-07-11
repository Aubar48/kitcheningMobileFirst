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

$("#btn__active3").click(() => {
    $(".home__main").is(":visible") ? $(".home__main").fadeOut() : $(".home__main").fadeIn();
});

//msj error 404 que se escribe solo
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element", {
        strings: ["ERROR 404, PAGE NOT FOUND!"],
    }).go();
});