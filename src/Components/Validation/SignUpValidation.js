const SignUpValidation = (values) => {
  let errors = {};

  if (!values.firstname) {
    errors.firstname = "UserName Required...";
  } else if (values.firstname.length < 4) {
    errors.firstname = "UserName must be more than 4 charcters...";
  }
  if (!values.lastname) {
    errors.lastname = "lastname Required...";
  } else if (values.lastname.length < 4) {
    errors.lastname = "Lastname must be more than 4 charcters...";
  }
  if (!values.email) {
    errors.email = "email Required...";
  } else if (values.email.length < 5) {
    errors.email = "In valid email adress";
  }
  if (!values.number) {
    errors.number = "number Required...";
  } else if (values.number.length < 10) {
    errors.number = "Number must be more than 10 charcters...";
  }
  if (!values.password) {
    errors.password = "Password Required...";
  } else if (values.password.length < 8) {
    errors.password = "Password must be more than 8 charcters...";
  }

  return errors;
};
export default SignUpValidation;
