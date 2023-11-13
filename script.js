let billInput = document.getElementById("billTotalInput")
let tipInput = document.getElementById("tipInput")
let peopleInput = document.getElementById("numberOfPeople")
let totalResult = document.getElementById("perPersonTotal")
let increaseBtn = document.getElementById("increasePeople")
let decreaseBtn = document.getElementById("decreasePeople")
peopleInput.value = 1

increaseBtn.onclick = () => {
    peopleInput.innerText = Number(peopleInput.innerText) + 1
    peopleInput.value = Number(peopleInput.innerText)
    console.log(peopleInput.value);
    perPersonTotal(billInput.value, tipInput.value, peopleInput.value);
}
decreaseBtn.onclick = () => {
    if (peopleInput.value > 1) {
        peopleInput.innerText = Number(peopleInput.innerText) - 1
        peopleInput.value = Number(peopleInput.innerText)
        perPersonTotal(billInput.value, tipInput.value, peopleInput.value);
    }
    console.log(peopleInput.value)
}
const perPersonTotal = (bill, tip, people) => {
    tipPrecentage = tip/100;
    tipAmount = bill*tipPrecentage
    let perPersonTotalResult = (tipAmount+Number(bill))/people
    totalResult.innerText = perPersonTotalResult;
}
billInput.oninput = () => {
    console.log(billInput.value)
    if (billInput.value.match(/^[0-9]+$/)){
        totalResult.style.color = "rgb(250, 250, 250)"
        perPersonTotal(billInput.value, tipInput.value, peopleInput.value);

    } else {
        totalResult.style.color = "red"
        totalResult.innerText = "Input Can't Contain Non-Numbers or be empty"
    }

}
tipInput.oninput = () => {
    console.log(tipInput.value)
    if (billInput.value.match(/^[0-9]+$/)){
        totalResult.style.color = "rgb(250, 250, 250)"
        perPersonTotal(billInput.value, tipInput.value, peopleInput.value);
    } else {
        totalResult.style.color = "red"
        totalResult.innerText = "Input Can't Contain Non-numbers or be empty"

    }
}

