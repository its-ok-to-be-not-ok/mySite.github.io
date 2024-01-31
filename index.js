let book1 = document.getElementById("book1");
let book2 = document.getElementById("book2");
let book3 = document.getElementById("book3");
let book4 = document.getElementById("book4");
let book5 = document.getElementById("book5");
let book6 = document.getElementById("book6");
let book7 = document.getElementById("book7");
let book8 = document.getElementById("book8");

let bill = 0;
let yourBill = document.getElementById("yourBill");

let bankAcc = document.getElementById("bankAcc");
let credCard = document.getElementById("credCard");
let cash = document.getElementById("cash");
let orderBtn = document.getElementById("orderBtn");

let myP = document.getElementById("myP");

book1.onclick = function()
{
    if(book1.checked) bill += 12;
    else bill -= 12;
    yourBill.textContent = bill + "$";
}

book2.onclick = function()
{
    if(book2.checked) bill += 200;
    else bill -= 200;
    yourBill.textContent = bill + "$";
}

book3.onclick = function()
{
    if(book3.checked) bill += 26;
    else bill -= 26;
    yourBill.textContent = bill + "$";
}

book4.onclick = function()
{
    if(book4.checked) bill += 40;
    else bill -= 40;
    yourBill.textContent = bill + "$";
}

book5.onclick = function()
{
    if(book5.checked) bill += 75;
    else bill -= 75;
    yourBill.textContent = bill + "$";
}

book6.onclick = function()
{
    if(book6.checked) bill += 36;
    else bill -= 36;
    yourBill.textContent = bill + "$";
}

book7.onclick = function()
{
    if(book7.checked) bill += 26;
    else bill -= 26;
    yourBill.textContent = bill + "$";
}

book8.onclick = function()
{
    if(book8.checked) bill += 20;
    else bill -= 20;
    yourBill.textContent = bill + "$";
}

orderBtn.onclick = function()
{
    if(bill == 0)
    {
        window.alert("Please select atleast one book before continue.");
    }
    else
    {
        if(bankAcc.checked)
        {
            myP.textContent = `You are paying ` + bill + '$ package with bank account.';   
        }
        else if(credCard.checked)
        {
            myP.textContent = `You are paying ` + bill + '$ package with credit card.';
        }
        else if(cash.checked)
        {
            myP.textContent = `You are paying ` + bill + '$ package on arrival by cash.';
        }
        else
        {
            myP.textContent = `Please select a payment method.`;
        }
    }

}
    



