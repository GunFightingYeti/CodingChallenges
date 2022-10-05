// Given a dollar amount and a tip percentage, calculate the tip amount and bill total.


let billAmount = 124.50;
let tipPercentage = 18;

function calculateTip(billAmount, tipPercentage) {

        billAmount = billAmount.toFixed(2);
        tipPercentage = tipPercentage.toFixed(0);
        let tipPercentageDecimal =  "0." + tipPercentage;
        tipPercentageDecimal = tipPercentageDecimal;
        let tipAmount = billAmount * tipPercentageDecimal;
        tipAmount = tipAmount.toFixed(2);
        let total = Number(billAmount) + Number(tipAmount);

        console.log(`\nThe bill was $${billAmount}, and you chose to tip ${tipPercentage}%. \nYour tip should be $${tipAmount} and your total is $${total}`);
}

calculateTip(billAmount, tipPercentage);
