import useInput from "../hook/useInput";

const SimpleInput = (props) => {
  const {
    value1: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputIsInvalid,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value2: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailIsInvalid,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">당신의 이름은?</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value1={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">이름은 빈 값일 수 없습니다.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">당신의 이메일은?</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value2={enteredEmail}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">유효한 이메일을 입력해주세요.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>제출하기</button>
      </div>
    </form>
  );
};

export default SimpleInput;
