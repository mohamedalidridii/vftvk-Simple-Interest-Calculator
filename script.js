function compute()
{
    var Amount = document.getElementById("principal").value;
    var Rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result = Amount*Rate/100*years;
    document.getElementById("result").innerHTML=( "If you deposit " + Amount + "," + " at an interest rate of " + Rate +"%," + " You will receive an amount of " +  result);


    
}
function updateTextInput(val) {
    document.getElementById('textInput').value=(val+"%"); 
  }    