//onload callback function validation 
 function Order() {

    console.log("in main function");
    var myForm  = document.getElementById("Orders");
    myForm.addEventListener("submit",validateForm);
  }

  //validate callback function 
  function validateForm(event) 

{
    var formValid = false;	// default to false!!!!!!!
    var myForm = document.getElementById("Orders"); 
    
    if (myForm.base.value == "") 
    {
        //display error message 
        document.getElementById("basesmallRequiredError").style.display = "block";
        //stop form from submitting
        event.preventDefault();
    } 
      
      else {
		formValid = true;
         document.getElementById("basesmallRequiredError").style.display = "none";
    }

    if (myForm.base.value == "") 
    {
        //display error message 
        document.getElementById("baseMediumRequiredError").style.display = "block";
        //stop form from submitting
        event.preventDefault();
    } 
      
      else {
		formValid = true;
         document.getElementById("baseMediumRequiredError").style.display = "none";
    }
    
     if (myForm.base.value == "") 
    {
        //display error message 
        document.getElementById("baseLargeRequiredError").style.display = "block";
        //stop form from submitting
        event.preventDefault();
    } 
      
      else {
		formValid = true;
         document.getElementById("baseLargeRequiredError").style.display = "none";
    }
    
     if (myForm.base.value == "") 
    {
        //display error message 
        document.getElementById("BaseXLargeRequiredError").style.display = "block";
        //stop form from submitting
        event.preventDefault();
    } 
      
      else {
		formValid = true;
         document.getElementById("BaseXLargeRequiredError").style.display = "none";
    }

   
		// Loop through checkboxes
    
    var form  = document.getElementById("Orders");                              

     for(var i = 0; i < form.extras.length; i++) {
         if (form.Toppings[i].checked){                                     // if one is checked
            //this block of code is executed 
            console.log("You selected" + form.Toppings[i].value);  
         }
     }
	
    if (myForm.Toppings.value =="") {
            
        formValid = true;
        document.getElementById("Topping").style.display = "block";
        event.preventDefault();
    }
    
    else (myForm.Toppings.value =="") {
        
        formValid = false;
        document.getElementById("Topping").style.display = "block";
        event.preventDefault();
    }
    
    // if one is checked
				// set form valid to true!
				
		// end loop
		
		// Check formValid is equal to false
			// if so - event.preventDefault();
	
    if (myForm.Address.value == "") {
        formValid = false;
        //display error message 
        document.getElementById("AddressRequiredError").style.display = "block";
        //stop form from submitting
        event.preventDefault();
    } 
      else {

         document.getElementById("AddressRequiredError").style.display = "none";
    }
        
    if (myForm.postCode.value == "") {
        formValid = false;
        //display error message 
        document.getElementById("postCodeRequiredError").style.display = "block";
        //stop form from submitting
        event.preventDefault();
    } 
      else {

         document.getElementById("postCodeRequiredError").style.display = "none";
    }
  }




