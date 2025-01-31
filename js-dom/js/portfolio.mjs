import account , {SignupRequest} from "./accounts.mjs";
/**
 * Write a function to handle Signup request as per the design
 */
export function handleSignup(form) {
  let signUp= new SignupRequest(form.name.value, form.email.value, form.password.value)
  let response= account.handleSignupRequest(signUp)
  
  if(response.success){
    const display= document.getElementById('signInform');
    display.style.display= 'block'
    const signupform = document.getElementById('signupform');
    signupform.style.display='none'
  }
  else{
   const userError = document.getElementById('user-error');
   userError.innerText = response.message;
  }
}

export function handleSignIn(form){
  let response= account.handleSignInRequest(form.email.value, form.password.value)
  if(response.success){
    console.log('succefully log In')
  }
  else{
    const error= document.getElementById('error');
    error.innerText= response.message
  }
}




window.handleSignup = handleSignup;
window.handleSignIn= handleSignIn;
