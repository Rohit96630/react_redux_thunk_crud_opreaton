const SignInValidation = (signInValues) => {
  let errors = {};

  if (!signInValues.signinemail) {
    errors.signinemail = "Email Required...";
  } else if (signInValues.signinemail.length < 5) {
  }
  if (!signInValues.signinpassword) {
    errors.signinpassword = "password Required...";
  } else if (signInValues.signinpassword.length < 8) {
  }

  return errors;
};
export default SignInValidation;
