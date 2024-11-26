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
        }
        if(lName === ""){
            lastError.innerHTML= "Please enter your Last Name.";
            lastError.classList ="";
        }
        if(email === ""){
            emailError.innerHTML = "Please enter your Email Address.";
            emailError.classList ="";
        }
        if(!regExEmail.test(email)){
            emailError.innerHTML = "Invalid Email.";
            emailError.classList ="";

        }
        if(message === ""){
            messageError.innerHTML = "Please enter a Message.";
            messageError.classList="";
        }
       
        console.log("submit was clicked");
       
        e.preventDefault();

    })

    









}