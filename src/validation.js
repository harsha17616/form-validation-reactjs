function validation(values) {
    const errors = {};
    return errors;
}
  function validateName(values){
    let errors = "";
    const name_pattern = /^[a-z]{0,10}$/;
    if (values.target.value.length===0) {
        errors = "Required";
    }
    else if (!name_pattern.test(values.target.value)) {
        errors = "Name is not above 10 charecters";
        console.log("innn",errors);

    }
    return errors;
}
 function validateEmail(values){
    let errors = "";
    const email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (values.target.value.length===0) {
        errors = "Required";
    }
    else if (!email_pattern.test(values.target.value)) {
        errors = "Email is invalid";
    }return errors;
}
 function validatePassword(values){
    let errors = "";
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (values.target.value.length===0) {
        errors= "Required";
    }
    else if (!password_pattern.test(values.target.value)) {
        errors= "Password is invalid"
    }return errors;
}
 function validateNumber(values){
    let errors = "";
    const number_pattern = /^[0-9]{1,3}[0-9]{9}$/;
    if (values.target.value.length===0) {
        errors = "Required";
    }
    else if (!number_pattern.test(values.target.value)) {
        errors = "Invalid Number"
    }return errors;
}
export {
    validation,
    validateName,
    validateEmail,
    validatePassword,
    validateNumber
}