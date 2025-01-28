/**
 * Utility class for storing response
 */
export class Response {
  constructor(success, message) {
    this.success = success;
    this.message = message;
  }
}

/**
 * Create a signup request class
 */
export class SignupRequest {
  constructor(name, email, password) {
    this.name= name;
    this.email= email;
    this.password= password;
  }

}

/**
 * Create a UserAccount class
 */
export class UserAccount {
  constructor(email, password) {
    this.email= email;
    this.password= password
  }
}

export class AccountService {
  /**
   * Stores a map of user accounts
   * where the key is the email and value is the UserAccount object
   * @param {*} accounts
   */
  constructor(accounts) {
    this.accounts = accounts;
  }

  /**
   * if user with that email already exists then return an object of type
   * Response - new Response(false, 'User already exists with this email')
   * else return  new Response(true, 'You have successfully signed up')
   * @param {*} request of type SignupRequest
   */
  handleSignupRequest(request) {
    if (this.accounts.has(request.email)){
      return new Response(false,'User already exists with this email')
    }
    else{
      this.accounts.set(request.email, new UserAccount(request.email,request.password))
      return new Response(true,'You have successfully signed up')
    }
  }

  /**
   * Authenticate using email and password
   * @param {*} email 
   * @param {*} password 
   * @returns 
   */
  handleSignInRequest(email,password){
    if (this.accounts.has(email) && this.accounts.get(email).password== password){
      return new Response(true,'authenticated')
    }
    else{
      return new Response(false,'invalid email or password')
    }
  }
}
//Create an empty Map for storing users
export default  new AccountService(new Map());
