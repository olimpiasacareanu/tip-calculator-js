let bill = document.querySelector('#bill')
let tipAmount = document.querySelector('#tip-amount')
let totalAmount = document.querySelector('#total-amount')
let tipPercent = document.querySelector('#tip-percent')
let tipInput = document.querySelector('#tip')
let peopleInput = document.querySelector('#no-of-people')
let peopleVal = document.querySelector('#split-num')
let tipParPerson = document.querySelector('#tip-per-person')
let totalPerPerson = document.querySelector('#total-per-person')

tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)
bill.addEventListener('change', calculateTip)


function calculateTip(){
   tipPercent.textContent = tipInput.value 
   peopleVal.textContent = peopleInput.value

   // Calculate total tips 
   let tip = (parseFloat(bill.value)*tipInput.value)/100
   tipAmount.textContent = tip.toFixed(2)

   // Calculate total amount 
   let totalAmountValue = parseFloat(bill.value) + tip
   totalAmount.textContent = totalAmountValue

   // Calculate tips par person
    let tipParPersonValue = tip/peopleInput.value
    tipParPerson.textContent = tipParPersonValue.toFixed(2)

    // Calculate total par persone
    let totalPerPersonValue = totalAmountValue/parseFloat(peopleInput.value)
    totalPerPerson.textContent = totalPerPersonValue.toFixed(2)
}