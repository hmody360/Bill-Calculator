let billInput = document.getElementById("billTotalInput")
let tipInput = document.getElementById("tipInput")
let peopleInput = document.getElementById("numberOfPeople")
let totalResult = document.getElementById("perPersonTotal")
let increaseBtn = document.getElementById("increasePeople")
let decreaseBtn = document.getElementById("decreasePeople")
let error = document.getElementById("error")
peopleInput.value = 1

increaseBtn.onclick = () => {
    peopleInput.innerText = Number(peopleInput.innerText) + 1
    peopleInput.value = Number(peopleInput.innerText)
    console.log(peopleInput.value);
    perPersonTotal(billInput.value, tipInput.value, peopleInput.value);
    checkValid()
}
decreaseBtn.onclick = () => {
    if (peopleInput.value > 1) {
        peopleInput.innerText = Number(peopleInput.innerText) - 1
        peopleInput.value = Number(peopleInput.innerText)
        perPersonTotal(billInput.value, tipInput.value, peopleInput.value);
    }
    console.log(peopleInput.value)
    checkValid()
}
const perPersonTotal = (bill, tip, people) => {
    tipPrecentage = tip/100;
    tipAmount = bill*tipPrecentage
    let perPersonTotalResult = (tipAmount+Number(bill))/people
    totalResult.innerText = perPersonTotalResult;
}
const checkValid = () => {
    if (tipInput.value.match(/^[0-9]+$/) && billInput.value.match(/^[0-9]+$/)){
        error.style.display = "none"
        perPersonTotal(billInput.value, tipInput.value, peopleInput.value);

    } else {
        error.style.display = "block"
        totalResult.innerText = "Invalid"
    }
}
billInput.oninput = () => {
    console.log(billInput.value)
    checkValid()
}
tipInput.oninput = () => {
    console.log(tipInput.value)
    checkValid()
}

