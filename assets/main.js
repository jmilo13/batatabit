const preview = document.getElementById('preview')
const next = document.getElementById('next')
const coins = document.getElementById('coins')
const comissions = document.getElementById('comissions')
const plans = document.getElementById('plans')
plans.scrollLeft = (618 - screen.width) / 2

preview.addEventListener('click', change)
next.addEventListener('click', change)

function change() {
    let elements = [coins, comissions, next, preview]
    elements.forEach(element => element.classList.toggle('carousel__element--hidden'))
}