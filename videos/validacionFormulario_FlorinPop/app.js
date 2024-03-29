const form = document.getElementById('form'); 
const username = document.getElementById('username'); 
const email = document.getElementById('email'); 
const password = document.getElementById('password'); 
const password2 = document.getElementById('password2'); 

form.addEventListener("submit", (e) => {
    e.preventDefault();


    checkInputs();
})

function checkInputs(){
    //get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue= email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ""){
        //show error
        //add error cladd
        setErrorfor(username, "Username cannot be blank");
    }else {
        //add success class
        setSuccessFor(username);
    }

    if(emailValue === ""){
        setErrorfor(email, "Email cannot be blank");
    }else if(!isEmail(emailValue)){
        setErrorfor(email, "Email is not valid");
    }else {
        setSuccessFor(email);
    }

    if(passwordValue === ""){
        setErrorfor(password,"Password cannot be blank")
    }else if(password2Value === ""){
        setErrorfor(password2,"Password two cannot be blank")
    }else if(password2Value !== passwordValue){
        setErrorfor(password,"Passwords don't match")
    }else if(!isPassword(passwordValue)){
        setErrorfor(password,"Should have at least one number, letter, and special character")
    }else {
        setSuccessFor(password);
        setSuccessFor(password2);
    }
   
}


function setErrorfor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector("small");

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";

}

function isEmail(email){
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

function isPassword(password){
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password);
}

