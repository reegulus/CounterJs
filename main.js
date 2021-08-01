
const input = document.getElementById('input')
const btnMinus = document.getElementById('btnMinus')
const btnReset = document.getElementById('btnReset')
const btnPlus = document.getElementById('btnPlus')

btnPlus.addEventListener('click', function (){
    input.value = parseInt(input.value) +1
})