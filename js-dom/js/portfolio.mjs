import abc, { SignupRequest } from "./accounts.mjs";
/**
 * Write a function to handle Signup request as per the design
 */
export function handleSignup(form) {
  console.log(form);
  console.log(form.email.this.SignupRequest.email)
  console.log(form.name.this.SignupRequest.name)

  abc.handleSignupRequest()
}

window.handleSignup = handleSignup;
