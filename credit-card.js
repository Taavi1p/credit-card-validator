var message = document.getElementById("message");
var validated = false;

// get the exact date from online and by that calculate if the card is expired
// note: there is no universal maximum credit card expiry date 
// CCV is calculated

document.getElementById("button").onclick = function() {
  var numberCheck = false;
  var cardNum = document.getElementById("numInput").value;
  var exDate = document.getElementById("dateInput").value;
  var ccv = document.getElementById("ccvInput").value;
  var dateNum = parseInt(exDate);
  var checkNum = parseInt(cardNum); 
  var isNumNum = /^\d+$/.test(cardNum);
  var isDateNum = /^\d+$/.test(exDate);
  var isCcvNum = /^\d+$/.test(ccv);
  console.log(isNumNum);  
  
  function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
  }

  function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    numberCheck = (sum % 10) == 0;
  }
  
  luhnCheck(checkNum);
  console.log(numberCheck);
  
  if (
      cardNum.length > 11 
      && exDate.length == 4 
      && ccv.length > 2
      && dateNum > 100 
      && dateNum < 1300 
      && isNumNum 
      && isDateNum 
      && isCcvNum 
      && numberCheck
     ) {

      message.innerHTML = 'this card is valid'
      message.style.color = "#39ff14"
    
  }
  
  else {
    message.innerHTML = "this card is invalid";
    message.style.color = "red";
  }
  
}