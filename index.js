const slides = document.querySelectorAll(".slider")

slides.forEach((slider) =>{
    slider.addEventListener("click", () => {
        removeCurrentActives()
        slider.classList.add('active')
    })
})

function removeCurrentActives () {
    slides.forEach((slider) => {
        slider.classList.remove("active")
    })
}