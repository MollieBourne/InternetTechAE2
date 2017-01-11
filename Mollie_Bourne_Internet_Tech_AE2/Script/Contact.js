//onload callback function
 function Contact() {

    console.log("in main function");
    var myForm  = document.getElementById("ContactUs");
    myForm.addEventListener("submit",validateForm);
  }

  //validate callback function 
  function validateForm(event) {
    var formValid = true;
    var myForm = document.getElementById("ContactUs"); 

    if (myForm.FirstName.value == "") {
        formValid = false;
        //display error message 
        document.getElementById("userFirstNameRequiredError").style.display = "block";
        //stop form from submitting
        event.preventDefault();
    } 
      
      else {

         document.getElementById("userFirstNameRequiredError").style.display = "none";
    }

        if (myForm.LastName.value == "") {
        formValid = false;
        //display error message 
        document.getElementById("LastNameRequiredError").style.display = "block";
        //stop form from submitting
        event.preventDefault();
    } 
      else {

         document.getElementById("LastNameRequiredError").style.display = "none";
    }

  
    if (myForm.PhoneNumber.value == "") {
        formValid = false;
        //display error message 
        document.getElementById("PhoneNumberRequiredError").style.display = "block";
        //stop form from submitting
        event.preventDefault();
    } else {

         document.getElementById("PhoneNumberRequiredError").style.display = "none";
    }

  if (myForm.EmailAddress.value == "") {
        formValid = false;
        //display error message 
        document.getElementById("EmailAddressRequiredError").style.display = "block";
        //stop form from submitting
        event.preventDefault();
    } else {

         document.getElementById("EmailAddressRequiredError").style.display = "none";
    }

if (myForm.Message.value == "") {
        formValid = false;
        //display error message 
        document.getElementById("MessageRequiredError").style.display = "block";
        //stop form from submitting
        event.preventDefault();
    } else {

         document.getElementById("MessageRequiredError").style.display = "none";
    }
  }
