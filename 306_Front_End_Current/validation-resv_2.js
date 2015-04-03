/**
 *The initial function that loads on startup
 *  
 */
function init(){
	registerEventHandlers();	
}

/**
 *The event handlers for the web app 
 */
function registerEventHandlers(){
	var submitButton;	
	
	submitButton = document.getElementById("submit-btn");
    submitButton.addEventListener("click", function() { 
    validatePageInfo();}, true);
}
/**
 *When passed a name of the DOM Element it returns its value
 *  
 * @param {Object} name - the name of the dom element
 */
function getInput(name){
	var output ="";
	output = document.getElementById(name).value;
	
	if (output == null){
		output ="";
	}
	return output;
}

function validatePageInfo() {

var email = getInput("email-textbox");
var jac = getInput("jac-textbox");
var dtp2 = getInput("dtp_input2");
var dtp3 = getInput("dtp_input3");

if(jac.length != 9){
	window.alert("Your Jac-Card Number is the incorrect length.")

}

if(email == "" || jac == "" || dtp2 == "" || dtp3 == ""){

	window.alert("Please make sure to fill in all fields before submitting.");
	}

}

       function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }