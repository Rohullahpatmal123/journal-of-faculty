// Form blur Event Listners
document.getElementById('first-name').addEventListener('blur',validatefirstName);
document.getElementById('last-name').addEventListener('blur',validatelastName);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('password').addEventListener('blur',validatePassword);
document.getElementById('password').addEventListener('blur',validateconfirmPassword);

// Creating Function for validateing Name

function validatefirstName(){
    const name=document.getElementById('first-name');
    const re=/^[a-zA-Z]{2,15}$/;

    if(!re.test(name.value)){
        document.getElementById('Name').innerHTML='Name must between 2 and 15 Characters';
        document.getElementById('Name').style.color='red';
    }
    else{
        document.getElementById('Name').innerHTML='';
    }
}


// CREATING FUNCTION FOR VALIDATING LAST-NAME
function validatelastName(){
    const lastname=document.getElementById('last-name');
    const re=/^[a-zA-Z]{2,10}$/;

    if(!re.test(lastname.value)){
        document.getElementById('LastName').innerHTML='LastName must between 2 and 10 Characters';
        document.getElementById('LastName').style.color='red';
    }
    else{
        document.getElementById('LastName').innerHTML='';
    }
}


// CREATING FUNCTION FOR VALIDATING EMAIL

// function for email
function validateEmail(){
    const email= document.getElementById('email');
    const re=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(email.value)){
    document.getElementById('EMAIL').innerHTML='Enter a valid  email ';
    document.getElementById('EMAIL').style.color='red';

    } else{
    document.getElementById('EMAIL').innerHTML='';

    }
    
}

// CREATING FUNCTION FOR VALIDATING PASSWORD
function validatePassword(){
    const password=document.getElementById('password');
    const re= /^[a-zA-Z0-9!@#$%&*]{6,10}$/;
    if(!re.test(password.value)){
      document.getElementById('pass').innerHTML='Enter a strong password and more than 5 Digits';
      document.getElementById('pass').style.color='red';
    }
    else{
      document.getElementById('pass').innerHTML='';
  
    }
  }
