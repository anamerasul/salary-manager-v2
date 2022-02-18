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
// expensevalidation function
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
// calculation of income and expenss function
function calculation(expenseAmoutTd,balanceAmoutId,message,remainingAmoutId){

const incomeInputValue = IncomeFunction('income-input','income-text','income-invalid','please use a number as positve');
const ExpensefoodInputValue= expensevalidation('food-input','food-input-worng','please use a number as positve');
const ExpenseRentInputValue= expensevalidation('rent-input','rent-input-worng','please use a number as positve');
const ExpenseClothInputValue=  expensevalidation('cloth-input','cloth-input-worng','please use a number as positve');
const remainingvalue=remainingAmmoutFunction();
const incomeAmmouttextvalue=incomeAmmountFunction();
const totalExpenses=ExpenseClothInputValue+ExpensefoodInputValue+ExpenseRentInputValue;
const expenseAmmount=document.getElementById(expenseAmoutTd);
const balanceAmmout=document.getElementById(balanceAmoutId);     
if(incomeInputValue>=0 && ExpensefoodInputValue>=0 &&ExpenseRentInputValue>=0 &&ExpenseClothInputValue>=0 ){
expensevalidation('food-input','food-input-worng','');
expensevalidation('rent-input','rent-input-worng','');
expensevalidation('cloth-input','cloth-input-worng','');
IncomeFunction('income-input','income-text','income-invalid','');
if(totalExpenses>incomeInputValue ){
expenseAmmount.innerText=message;
balanceAmmout.innerText=incomeInputValue;
}
else{
expenseAmmount.innerText=totalExpenses;
balanceAmmout.innerText=incomeInputValue-totalExpenses;
}           
}
else if(totalExpenses>incomeAmmouttextvalue ){
expenseAmmount.innerText=message;
balanceAmmout.innerText=incomeAmmouttextvalue;
}
else if(remainingvalue>0){
IncomeFunction('income-input','income-text','income-invalid','');
expensevalidation('food-input','food-input-worng','');
expensevalidation('rent-input','rent-input-worng','');
expensevalidation('cloth-input','cloth-input-worng','');
document.getElementById(remainingAmoutId).innerText=remainingvalue-totalExpenses;
expenseAmmount.innerText=totalExpenses;
balanceAmmout.innerText=remainingvalue-totalExpenses;
}
else if(incomeAmmouttextvalue>0){
expenseAmmount.innerText=0;
balanceAmmout.innerText=incomeAmmouttextvalue-0;
}
}

// SavingsOfIncome function

function savingsOfIncome(savingsAmoutId,remainingAmoutId,message){
const saveInputValue=saveInputFunction();
console.log(saveInputValue)
const incomeInputValue = IncomeFunction('income-input','income-text','income-invalid','please use a number as positve');
const incomeAmmoutValue=incomeAmmountFunction();
const balanceAmmountValue=balanceAmmoutFunction();
const savingsAmmout=document.getElementById(savingsAmoutId);
const remainingAmmout=document.getElementById(remainingAmoutId);

if(saveInputValue===undefined){
if(balanceAmmountValue===false){
savingsAmmout.innerText=0;  
remainingAmmout.innerText=0
}
else{
savingsAmmout.innerText=0;  
remainingAmmout.innerText=balanceAmmountValue
}        
}

else if(incomeInputValue>0){
if(incomeInputValue<(incomeInputValue*(saveInputValue/100))){
savingsAmmout.innerText=message;  
remainingAmmout.innerText=((incomeInputValue*(saveInputValue/100))- incomeInputValue).toFixed(2); 
}
else{
savingsAmmout.innerText=(incomeInputValue*(saveInputValue/100)).toFixed(2);  
remainingAmmout.innerText=(incomeInputValue-(incomeInputValue*(saveInputValue/100))).toFixed(2);
IncomeFunction('income-input','income-text','income-invalid',' ');
}
}
else if(balanceAmmountValue>0){
if(balanceAmmountValue<(incomeAmmoutValue*(saveInputValue/100))){
savingsAmmout.innerText=message;
remainingAmmout.innerText=balanceAmmountValue; 
IncomeFunction('income-input','income-text','income-invalid',' ');   
}
else{
savingsAmmout.innerText=(incomeAmmoutValue*(saveInputValue/100)).toFixed(2) ;                
remainingAmmout.innerText=(balanceAmmountValue-(incomeAmmoutValue*(saveInputValue/100))).toFixed(2);
IncomeFunction('income-input','income-text','income-invalid',' ');
}
}
else if(incomeAmmoutValue>0){
savingsAmmout.innerText=(incomeAmmoutValue*(saveInputValue/100)).toFixed(2);                 
remainingAmmout.innerText=(incomeAmmoutValue-(incomeAmmoutValue*(saveInputValue/100))).toFixed(2);
IncomeFunction('income-input','income-text','income-invalid','');
}
// else if()
}
// handle calculate button
document.getElementById('calculate-btn').addEventListener('click', function(e){
        calculation('expense-ammout','balance-ammout','you have not enough balance','remaining-ammout');
})
// handle save button
document.getElementById('save-btn').addEventListener('click' ,function(e){
        savingsOfIncome('savings-ammout','remaining-ammout','you have not enough balance for savings');
})