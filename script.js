window.onload = function(){

    var btn = document.getElementById("form_submit");
    
    var firstError = document.getElementById("first_error");
    var lastError = document.getElementById("last_error");
    var emailError = document.getElementById("email_error");
    var messageError = document.getElementById("message_error");
    var regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



    btn.addEventListener("click",function(e){

        var formHandle = document.forms.form;
        var fName = formHandle.f_name.value;
        var lName = formHandle.l_name.value;
        var email = formHandle.email.value;
        var message = formHandle.message.value;
        var errorCount = 0;

        console.log(fName);
        console.log(lName);
        console.log(email);
        console.log(message);

        firstError.innerHTML = "";
        lastError.innerHTML = "";
        email.innerHTML = "";
        message.innerHTML = "";

        firstError.classList= "error";
        lastError.classList= "error";
        emailError.classList= "error";
        messageError.classList= "error";

        if(fName === ""){
            firstError.innerHTML = "Please enter your First Name.";
            firstError.classList= "";
            errorCount++;
        }
        if(lName === ""){
            lastError.innerHTML= "Please enter your Last Name.";
            lastError.classList ="";
            errorCount++;
        }
        if(email === ""){
            emailError.innerHTML = "Please enter your Email Address.";
            emailError.classList ="";
            errorCount++;
        }
        if(!regExEmail.test(email)){
            emailError.innerHTML = "Invalid Email.";
            emailError.classList ="";
            errorCount++;

        }
        if(message === ""){
            messageError.innerHTML = "Please enter a Message.";
            messageError.classList="";
            errorCount++;
        }
       
        console.log("submit was clicked");
        
       if(errorCount > 0){
        e.preventDefault();
       }
        

    })

    









}