document.getElementById('dipositButton').addEventListener('click', function () {


    // Get the amount Diposited
    // Update deposite Total 

    const dipositInput = document.getElementById('depositeInput');
    const newdipositText = dipositInput.value;
    const newdipositAmount = parseFloat(newdipositText);
    // console.log(dipositAmount);
    // Clear the deposit Input filed 

    dipositInput.value = '';

    const dipositTotal = document.getElementById('deposit-total');
    const currentDepositText = dipositTotal.innerText;
    const currentDepositAmount = parseFloat(currentDepositText);
    const newDipositeTotal = currentDepositAmount + newdipositAmount;
    dipositTotal.innerText = newDipositeTotal;

    // Update account blance 

    const blanceTotal = document.getElementById('blance-total');
    const blanceText = blanceTotal.innerText;
    const blanceAmounnt = parseFloat(blanceText);
    const newBlanceTotal = blanceAmounnt + newdipositAmount;
    blanceTotal.innerText = newBlanceTotal;

});


// Handel With Withdrow 

document.getElementById('withdrowButton').addEventListener('click', function () {
    const withdrowInput = document.getElementById('withdrowInput');
    const withdrowAmountText = withdrowInput.value;
    const withdrowAmount = parseFloat(withdrowAmountText);


    // set withdro Total 
    const withdrowTotal = document.getElementById('withdrowTotal');
    const withdrowTotalText = withdrowTotal.innerText;
    const withdrowTotalAmount = parseFloat(withdrowTotalText);
    const newwithdrowTotal = withdrowTotalAmount + withdrowAmount;

    withdrowTotal.innerText = newwithdrowTotal;


    // Clear Input Value 
    withdrowInput.value = '';

    // Update Balance 
    const balanceTotal = document.getElementById('blance-total');
    const balanceText = balanceTotal.innerText;
    const balacneAmount = parseFloat(balanceText);
    const newBlancetoTal = balacneAmount - newwithdrowTotal;
    balanceTotal.innerText = newBlancetoTal;



});