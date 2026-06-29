let calculation=localStorage.getItem('calculation')||'';
function numberPressed(number){
    calculation=calculation+number;
    displayCalculation();
    localStorage.SetItem('calculation',calculation);
}
function displayCalculation(){
    document.querySelector('.calculation-display').innerHTML=calculation;
}