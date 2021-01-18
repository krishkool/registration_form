

function checkInputs() {

    const fnameValue = document.myForm.fname.value.trim();
    const lnameValue = document.myForm.lname.value.trim();
    const dobValue = document.myForm.dob.value.trim();
    const contactValue = document.myForm.contact.value.trim();
    const emailValue = document.myForm.email.value.trim();
    const passValue = document.myForm.pass.value.trim();
    const pass2Value = document.myForm.pass2.value.trim();


    if(fnameValue == "" || fnameValue == null){
        alert("Hmm...Forgot Your First Name ?");
        return false;
    } 

    if(lnameValue == "" || lnameValue == null){
        alert("Hmm...Forgot Your Last Name ?");
        return false;
    }
   
    if(dobValue == "" || dobValue == null){
        alert("Hmm...Forgot Your Date of Birth ?");
        return false;
    }

    if(contactValue == "" || contactValue == null){
        alert("Hmm...Forgot Your Contact Number ?");
        return false;
    }
    
    if(emailValue == "" || emailValue == null){
        alert("Hmm...Forgot Your Email Name ?");
        return false;
    } 
    if(passValue == "" || passValue == null){
        alert("Hmm... Forgot to Enter Password ?");
        return false;
    }
    if(passValue !== pass2Value){
        alert("password Mismatch");
        return false;
    }
    
    else if(fnameValue !== "" || fnameValue !== null || lnameValue !== "" || lnameValue !== null ||
    dobValue !== "" || dobValue !== null || contactValue !== "" || contactValue !== null ||  emailValue !== "" || emailValue !== null ||
    passValue !== "" || passValue !== null){

        alert("Hurray....Now you are one of us... :) "  + "\n" + "\n"+ "First Name: " +fnameValue + "\n" +
         "Last Name: " + lnameValue + "\n" + "Date of Birth :" +dobValue + "\n"+"Email : " +emailValue  + "\n" + 
         "Contact Number: " +contactValue);
    }
   }








