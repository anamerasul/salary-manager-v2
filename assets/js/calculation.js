// income input function with handling error
function IncomeFunction(inputId,incometextID,incomeinvalidID,message){
        const incomeInput=document.getElementById(inputId);
        const incomeInputValueText=incomeInput.value;
        const incomeInputValue=parseFloat(incomeInputValueText);

        if(incomeInputValue>0){
                document.getElementById(incometextID).innerHTML=`<span>your income is</span><span id="income-ammout"> ${incomeInputValue}</span>`
                incomeInput.value='';
                return incomeInputValue;
        }

        else{
                        document.getElementById(incomeinvalidID).innerText=message;

                        incomeInput.value='';
                
        }

        incomeInput.value='';

}


// incomeammout function


function  incomeAmmountFunction(){
        const incomeAmmout=document.getElementById('income-ammout');
        const incomeAmmoutText=incomeAmmout.innerText;
        const incomeAmmoutValue=parseFloat(incomeAmmoutText);
        
        if(incomeAmmoutValue>0){
                return incomeAmmoutValue;
        }

        else{
                return false;
        }
}


function expensevalidation(inputID,inputmessageId,message){
        const ExpenseInput=document.getElementById(inputID);
        const ExpenseInputValueText=ExpenseInput.value;
        const ExpenseInputValue=parseFloat(ExpenseInputValueText);
        if(ExpenseInputValue>0){
                ExpenseInput.value='';
                return ExpenseInputValue;

        }
        else{
                const Meassage=document.getElementById(inputmessageId);
                Meassage.innerText=message;
                ExpenseInput.value='';

        }

        
}

// saveInputFunction
function saveInputFunction(){
        const saveInput =document.getElementById('save-input');

        const saveInputValueText=saveInput.value;
        const saveInputValue=parseFloat(saveInputValueText);

        if (saveInputValue>=0){
                saveInput.value='';
                return saveInputValue;
        }

        else{
                document.getElementById('save-input-error').innerText='please type a positive value'

                document.getElementById('savings-ammout').innerText='please type a positive value on the save button input'
        }
}



// remainingAmmoutFunction
function  remainingAmmoutFunction(){
        const remainingAmmout=document.getElementById('remaining-ammout');
        const remainingvaluetext=remainingAmmout.innerText;
        const remainingvalue=parseFloat(remainingvaluetext);

        if(remainingvalue>0){


                return remainingvalue;
        }

}

// function balanceAmmoutFunction()
function balanceAmmoutFunction(){
        const balanceAmmout=document.getElementById('balance-ammout');
        
        const balanceAmmouttext=balanceAmmout.innerText;
        const balanceAmmountValue=parseFloat(balanceAmmouttext);
        
        if(balanceAmmountValue>0){
                return balanceAmmountValue;
        
        }
        
        else{
                return false;
        }
        
        
}

// calculation function

function calculation(){

        const incomeInputValue = IncomeFunction('income-input','income-text','income-invalid','please use a number as positve');
        const ExpensefoodInputValue= expensevalidation('food-input','food-input-worng','please use a number as positve');
        const ExpenseRentInputValue= expensevalidation('rent-input','rent-input-worng','please use a number as positve');
        const ExpenseClothInputValue=  expensevalidation('cloth-input','cloth-input-worng','please use a number as positve');

        const remainingvalue=remainingAmmoutFunction()

        const incomeAmmouttextvalue=incomeAmmountFunction();


        const totalExpenses=ExpenseClothInputValue+ExpensefoodInputValue+ExpenseRentInputValue;

        const expenseAmmount=document.getElementById('expense-ammout');
        const balanceAmmout=document.getElementById('balance-ammout');
        // balanceAmmout.innerText=incomeInputValue-totalExpenses;     
        
        if(incomeInputValue>=0 && ExpensefoodInputValue>=0 &&ExpenseRentInputValue>=0 &&ExpenseClothInputValue>=0 ){
                // expenseAmmount.innerText=totalExpenses;
                // balanceAmmout.innerText=incomeInputValue-totalExpenses; 
                expensevalidation('food-input','food-input-worng','');
                expensevalidation('rent-input','rent-input-worng','');
                expensevalidation('cloth-input','cloth-input-worng','');
                IncomeFunction('income-input','income-text','income-invalid','');

                if(totalExpenses>incomeInputValue ){
                        expenseAmmount.innerText='you have not enough balance'
                        balanceAmmout.innerText=incomeInputValue;
                
                       }

                       else{
                        expenseAmmount.innerText=totalExpenses;
                        balanceAmmout.innerText=incomeInputValue-totalExpenses;
                       }

                
        }

        
       else if(totalExpenses>incomeAmmouttextvalue ){
        expenseAmmount.innerText='you have not enough balance'
        balanceAmmout.innerText=incomeAmmouttextvalue;

       }

       else if(remainingvalue>0){

        IncomeFunction('income-input','income-text','income-invalid','');
        expensevalidation('food-input','food-input-worng','');
        expensevalidation('rent-input','rent-input-worng','');
        expensevalidation('cloth-input','cloth-input-worng','');

        document.getElementById('remaining-ammout').innerText=remainingvalue-totalExpenses;
         expenseAmmount.innerText=totalExpenses;
         balanceAmmout.innerText=remainingvalue-totalExpenses;


       }



         else if(incomeAmmouttextvalue>0){
                expenseAmmount.innerText=0;
                balanceAmmout.innerText=incomeAmmouttextvalue-0;

        
        }
}

// handle calculate button

document.getElementById('calculate-btn').addEventListener('click', function(e){

        // console.log('clicked')

        // const incomeInput=document.getElementById('income-input');
        // const incomeInputValueText=incomeInput.value;
        // const incomeInputValue=parseFloat(incomeInputValueText)
        // console.log(incomeInputValue)

        // console.log(typeof incomeInputValueText)
        // console.log(typeof incomeInputValue);

        // document.getElementById('income-text').innerHTML=`<span>your income is</span><span id="income-ammout"> ${incomeInputValue}</span>`

        // const ExpensefoodInput=document.getElementById('food-input');
        // const ExpensefoodInputValueText=ExpensefoodInput.value;
        // const ExpensefoodInputValue=parseFloat(ExpensefoodInputValueText);
        // const ExpenseRentInput=document.getElementById('rent-input');
        // const ExpenseRentInputValueText=ExpenseRentInput.value;
        // const ExpenseRentInputValue=parseFloat(ExpenseRentInputValueText);
        // console.log(ExpenseRentInputValue);
        // const ExpenseClothInput=document.getElementById('cloth-input');
        // const ExpenseClothInputValueText=ExpenseClothInput.value;
        // const ExpenseClothInputValue=parseFloat(ExpenseClothInputValueText);
        // console.log(ExpenseClothInputValue);
        // console.log(ExpensefoodInputValue);

        // const totalExpenses=ExpenseClothInputValue+ExpensefoodInputValue+ExpenseRentInputValue;

        // const expenseAmmount=document.getElementById('expense-ammout');
        // expenseAmmount.innerText=totalExpenses;

        // const balanceAmmout=document.getElementById('balance-ammout');
        // balanceAmmout.innerText=incomeInputValue-totalExpenses;
        // incomeInput.value='';
        // ExpensefoodInput.value='';
        // ExpenseRentInput.value='';
        // ExpenseClothInput.value='';

        calculation();

})


// handle discount  button
document.getElementById('save-btn').addEventListener('click' ,function(e){
        // const saveInput =document.getElementById('save-input');

        // const saveInputValueText=saveInput.value;
        // const saveInputValue=parseFloat(saveInputValueText);
        const saveInputValue=saveInputFunction();

        const incomeInputValue = IncomeFunction('income-input','income-text','income-invalid','please use a number as positve');

        // const incomeAmmout=document.getElementById('income-ammout');
        // const incomeAmmoutText=incomeAmmout.innerText;
        // const incomeAmmoutValue=parseFloat(incomeAmmoutText);
        const incomeAmmoutValue=incomeAmmountFunction();

        

        // const balanceAmmout=document.getElementById('balance-ammout');

        // const balanceAmmouttext=balanceAmmout.innerText;
        // const balanceAmmountValue=parseFloat(balanceAmmouttext);
        const balanceAmmountValue=balanceAmmoutFunction()

        const savingsAmmout=document.getElementById('savings-ammout');
        const remainingAmmout=document.getElementById('remaining-ammout');

        if(incomeInputValue>0){

                if(incomeInputValue<(incomeInputValue*(saveInputValue/100))){
                        savingsAmmout.innerText='you have not enough balance for savings';  
                
                        remainingAmmout.innerText=(incomeInputValue*(saveInputValue/100))- incomeInputValue; 
                        
                        // IncomeFunction('income-input','income-text','income-invalid',' ');

                }
                else{

                savingsAmmout.innerText=incomeInputValue*(saveInputValue/100);  
                
                remainingAmmout.innerText=incomeInputValue-(incomeInputValue*(saveInputValue/100));
                IncomeFunction('income-input','income-text','income-invalid',' ');
                }
        }

        else if(balanceAmmountValue>0){

                if(balanceAmmountValue<(incomeAmmoutValue*(saveInputValue/100))){
                        savingsAmmout.innerText='you do not have enough balance for saving'
                        remainingAmmout.innerText=balanceAmmountValue; 
                        IncomeFunction('income-input','income-text','income-invalid',' ');   
                }
                else{
                savingsAmmout.innerText=incomeAmmoutValue*(saveInputValue/100) ;


                
                remainingAmmout.innerText=balanceAmmountValue-(incomeAmmoutValue*(saveInputValue/100));

                IncomeFunction('income-input','income-text','income-invalid',' ');
                }
        }

        else if(incomeAmmoutValue>0){

                savingsAmmout.innerText=incomeAmmoutValue*(saveInputValue/100) 


                
                remainingAmmout.innerText=incomeAmmoutValue-(incomeAmmoutValue*(saveInputValue/100))

                IncomeFunction('income-input','income-text','income-invalid','');
        }

        // else if(saveInputValue<0){
        //        return false;
        // }



        // savingsAmmout.innerText=incomeAmmoutValue*(saveInputValue/100);

        // const balanceAmmout=document.getElementById('balance-ammout');

        // const balanceAmmouttext=balanceAmmout.innerText;
        // const balanceAmmountValue=parseFloat(balanceAmmouttext);

        // const remainingAmmout=document.getElementById('remaining-ammout');

        // remainingAmmout.innerText=balanceAmmountValue-parseFloat(savingsAmmout.innerText);

        // incomeInput.value='';


})


