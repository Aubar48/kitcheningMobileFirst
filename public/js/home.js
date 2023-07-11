//title double
let alertShow = false

if (document.title === "Kitchening") {
    setInterval(() => {
        document.title =
            alertShow ? "Home 🥘"
                : "Kitchening"

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