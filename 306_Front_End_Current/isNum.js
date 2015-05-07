function isNum(evt)
{
	var charCode = (evt.which) ? evt.which : event.keyCode; //Takes in a user's input in terms of the unicode associated with said input.
	
	if(charCode != 46 && charCode > 31 &&(charCode < 45 || charCode > 57)) //Establishes an unicode range.  This range only allows numerical values to be entered.
	{
		return false; //If an alphabetical character is pressed, the function returns false thus blocking the user from entering said character.
	}
	else
		return true; //If a numerical character is pressed, it is passed through for the program to manipulate.
}