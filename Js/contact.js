
var NameInput = document.getElementById('NameInput');
var PasswordInput = document.getElementById('PasswordInput');
var EmailInput = document.getElementById('EmailInput');
var submitBtn = document.getElementById('submitBtn');


var invalidName = document.getElementById('invalidName');
var emptyName = document.getElementById('emptyName');

var invalidEmail = document.getElementById('invalidEmail');
var emptyEmail = document.getElementById('emptyEmail');

var invalidPassword = document.getElementById('invalidPassword');
var emptyPassword = document.getElementById('emptyPassword');

;



//////////////////////////////validate User Name/////////////////////////////////////////


function validateName() {
    var rejex = /^[a-zA-Z]{3,8}$/;
    if (rejex.test(NameInput.value) == true) {
        invalidName.classList.replace("d-block", "d-none");
        emptyName.classList.replace("d-block", "d-none");
        return true;
    } else if (NameInput.value == '') {

        emptyName.classList.replace("d-none", "d-block");
        invalidName.classList.replace("d-block", "d-none");

    }

    else {
        invalidName.classList.replace("d-none", "d-block");
        emptyName.classList.replace("d-block", "d-none");
        return false;
    }

}
//////////////////////////////validate Email/////////////////////////////////////////

function validateEmail() {
    var r = /^\S+@\S+\.\S+$/;
    if (r.test(EmailInput.value) == true) {
        invalidEmail.classList.replace("d-block", "d-none");
        emptyEmail.classList.replace("d-block", "d-none");


        return true;
    } else if (EmailInput.value == '') {

        emptyEmail.classList.replace("d-none", "d-block");
        invalidEmail.classList.replace("d-block", "d-none");

    }

    else {
        invalidEmail.classList.replace("d-none", "d-block");
        emptyEmail.classList.replace("d-block", "d-none");
        return false;
    }


}

////////////////////////////////validate Password ///////////////////////////////////////

function validatePassword() {
    var rejex = /^[a-zA-Z1-9]{4,10}$/;
    if (rejex.test(PasswordInput.value) == true) {
        invalidPassword.classList.replace("d-block", "d-none");
        emptyPassword.classList.replace("d-block", "d-none");


        return true;
    } else if (PasswordInput.value == '') {

        emptyPassword.classList.replace("d-none", "d-block");
        invalidPassword.classList.replace("d-block", "d-none");

    }

    else {
        invalidPassword.classList.replace("d-none", "d-block");
        emptyPassword.classList.replace("d-block", "d-none");
        return false;
    }

}


/////////////////////////// validate Button ///////////////////////////////////


function validateButton() {
    if (NameInput.value == '' || EmailInput.value == '' || PasswordInput.value == '') {


        validateName();
        validateEmail();
        validatePassword();
     
    } else {
        
        NameInput.value = '';
        EmailInput.value = '';
        PasswordInput.value = ''
    }
    
   
}





// Adding to Cart
var addedCount = document.getElementById('myCart');
var n = localStorage.getItem('counter');
var prevItemValues = localStorage.getItem("counter");
addedCount.innerText = prevItemValues;
console.log(tt);
function addingToCart() {
 

  if (n === null) {
    n = 1;
  } else {
    n++;
  }
  console.log(n);
  localStorage.setItem("counter", n);
  
  addedCount.innerText = n;
}