const btnMinus = document.getElementById('btnMinus')
const btnReset = document.getElementById('btnReset')
const btnPlus = document.getElementById('btnPlus')

updateCounter(counter)

btnPlus.addEventListener('click', function () {
    increase()
    updateCounter(counter)
})

btnMinus.addEventListener('click', function () {
    decrease()
    updateCounter(counter)
})

btnReset.addEventListener('click', function () {
    reset()
    updateCounter(counter)
})