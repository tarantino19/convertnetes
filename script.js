`use strict`

const inputArea = document.getElementById ("input-area")
const massElement= document.getElementById ("mass-element")

let inputNumber = inputArea.value
const oneKilo = 2.205

function convertMass () {
    let resultKilogram = inputNumber / oneKilo ;
    resultKilogram = parseFloat(resultKilogram.toFixed(3));
    let resultPounds = inputNumber * oneKilo;
    resultPounds = parseFloat(resultPounds.toFixed(3));
    massElement.innerHTML = `
    <p>
    <b class="bg-primary text-white pt-1 pb-1 ps-2 pe-2 rounded display-5 mt-5 pt-2 pb-3">${inputNumber} kilos = ${resultPounds} pounds</b>
    | 
    <b class="bg-danger text-white pt-1 pb-1 ps-2 pe-2 rounded display-5 mt-5 pt-2 pb-3">${inputNumber} pounds = ${resultKilogram} kilos</p></b>
    `
}

function convertEverything () {
    inputNumber = inputArea.value
    convertMass ()
}

inputArea.addEventListener ("keyup", convertEverything)




