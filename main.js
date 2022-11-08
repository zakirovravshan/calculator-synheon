let elInp = document.querySelector(".calculator__inp")
let elSel = document.querySelector(".calculator__select")
let elForm = document.querySelector(".calculator__form")
let elWater = document.querySelector(".water")
let elFreeze = document.querySelector(".antifreeze")

elForm.addEventListener("submit" , function(evt) {
    evt.preventDefault()
    console.log("submit boldi");
    if(elSel.value == 35){
        elWater.textContent = elInp.value * 0.5 + " - литр"
        elFreeze.textContent = elInp.value * 0.5  + " - литр"
    }
    if(elSel.value == 25){
        elWater.textContent = (elInp.value * 0.6).toFixed(1) + " - литр"
        elFreeze.textContent = (elInp.value * 0.4).toFixed(1) + " - литр"
    }
    if(elSel.value == 15){
        elWater.textContent = (elInp.value * 0.7).toFixed(1) + " - литр"
        elFreeze.textContent = (elInp.value * 0.3).toFixed(1) + " - литр"
    }
    if(elSel.value == 8){
        elWater.textContent = (elInp.value * 0.8).toFixed(1) + " - литр"
        elFreeze.textContent = (elInp.value * 0.2).toFixed(1) + " - литр"
    }
})