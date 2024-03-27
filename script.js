const btn = document.querySelector(".header__content__btn");
const menu = document.querySelector(".header__menu");
function handleMenu(){
    btn.classList.toggle("active")
    menu.classList.toggle("active")
}
btn.addEventListener("click" , handleMenu)