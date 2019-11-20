import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginvalidationService {
  constructor() {}

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      required: "Required",
      invalidEmail:
        "This email does not exist, it's not even an email. Must have characters '@' and '.' Example: email@gmail.com",
      invalidPassword:
        "Three words.. weak. Twelve more words: Must be at least 6 characters and 1 number",
      invalidLogin: "Invalid login, please try again."
    };
    return config[validatorName];
  }
  static loginValidator(login) {
    if (login === "invalid") {
      return { invalidLogin: true };
    }
  }
}
