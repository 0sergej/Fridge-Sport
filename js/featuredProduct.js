const btnNext = document.getElementsByClassName('btnNext')
const product1 = document.getElementsByClassName('featured__section--1')
const product2 = document.getElementsByClassName('featured__section--2')

var selection1Showed = true
loop()

function loop() {
    btnNext[0].addEventListener('click', () => {
        if (selection1Showed) {
            product1[0].classList.remove('hidden')
            product2[0].classList.add('hidden')
            selection1Showed = false
        } else if (!selection1Showed) {
            product2[0].classList.remove('hidden')
            product1[0].classList.add('hidden')
            selection1Showed = true
        }
    })

    if (selection1Showed) {
        product1[0].classList.remove('hidden')
        product2[0].classList.add('hidden')
        selection1Showed = false
    } else if (!selection1Showed) {
        product2[0].classList.remove('hidden')
        product1[0].classList.add('hidden')
        selection1Showed = true
    }
    var myTimeout = setTimeout(loop, 5000)
}
