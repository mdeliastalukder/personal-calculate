function allExpenses(InputEvent) {
    const expenInput = document.getElementById(InputEvent);
    const expenInputText = expenInput.value;
    // condition 1 :
    if (isNaN(expenInputText)) {
        alert("You Give A Worrog Value : " + ' ' + expenInputText)
    }
    // condition 2 :
    else if (expenInputText < 0) {
        alert("You Give A Positive Value : " + ' ' + expenInputText)
    }
    // condition 3 :
    else {
        const expenInputAmount = parseFloat(expenInputText);
        return expenInputAmount;
    }
}


// get id and calaculate This input income or everaythisng
document.getElementById('Claculatetor').addEventListener('click', function () {
    const totalExpences = document.getElementById('Total-Expenses');
    const myincomeTotal = allExpenses('IncomeAmount');
    const foodAmount = allExpenses('foodAmount');
    const RentAmount = allExpenses('RentAmount');
    const ClothesAmount = allExpenses('ClothesAmount');
    // submation all Exoences Blances 
    const MytotalExpencse = foodAmount + RentAmount + ClothesAmount;
    totalExpences.innerText = MytotalExpencse;
    const MyBlances = document.getElementById('Blances');
    const mainblances = myincomeTotal - MytotalExpencse;
    MyBlances.innerText = mainblances;

    // get saveButton or save Persentage and two condition 
    document.getElementById('SaveButton').addEventListener('click', function () {
        const SaveingAmount = document.getElementById('SaveingAmount');
        const SaveInput = allExpenses('SaveInput');
        const MyIncome = allExpenses('IncomeAmount');
        const TotalSavingAmount = ((MyIncome * SaveInput) / 100);

        //condition 1 : 
        if (mainblances > TotalSavingAmount) {
            SaveingAmount.innerText = TotalSavingAmount;
            const TotalRemanig = document.getElementById('TotalRemainig');
            const Remenigblances = mainblances - TotalSavingAmount;
            TotalRemanig.innerText = Remenigblances;
        }
        //condition 2 :
        else {
            alert("Your Total Savings Becomes To A Largest With Your TotalBlances")
        }

    })
});