export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      required: "Required",
      invalidEmail:
        "This email does not exist, it's not even an email. Must have characters '@' and '.' Example: email@gmail.com",
      invalidPassword:
        "Three words.. weak. Twelve more words: Must be at least 6 characters and 1 number",
      minlength: `Minimum length ${validatorValue.requiredLength}`,
      invalidLogin: "Invalid login, please try again."
    };
    return config[validatorName];
  }

  static emailValidator(control) {
    // tslint:disable-next-line: max-line-length
    // this is regular expression of email
    // tslint:disable-next-line: max-line-length
    if (
      control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    ) {
      return null;
    } else {
      return { invalidEmail: true };
    }
  }

  static passwordValidator(control) {
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{4,100}$/)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }
}
