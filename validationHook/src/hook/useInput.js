import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const enteredEmailIsValid = validateValue(enteredEmail);
  const hasError =
    (!valueIsValid && isTouched) ||
    (!enteredEmailIsValid && enteredEmailTouched);

  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const valueInputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  return {
    value: enteredValue,
    value2: enteredEmail,
    isValid: { valueIsValid, enteredEmailIsValid },
    hasError,
    valueInputChangeHandler,
    emailInputChangeHandler,
    valueInputBlurHandler,
    emailInputBlurHandler,
    reset,
  };
};

export default useInput;
