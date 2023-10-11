import React, { useState } from "react";
import errorIcon from "../../public/Images/icon-error.svg";

export default function InputField() {
  const [inputValue, setInputValue] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailRegex.test(inputValue)) {
      alert(`You entered a valid email: ${inputValue}`);
    } else {
      setIsValidEmail(false);
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="inputField">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email Address"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setIsValidEmail(true);
          }}
          // style={{
          //   paddingLeft: "20px",
          //   borderColor: isValidEmail ? "inherit" : "red"
          // }}
          style={{
            paddingLeft: "20px",
            backgroundImage: isValidEmail ? "none" : `url(${errorIcon})`,
            backgroundPosition: "right 10px center", // Adjust as needed
            backgroundRepeat: "no-repeat",
            paddingRight: isValidEmail ? "initial" : "30px" // Make space for the image, adjust as needed
          }}
        />

        <button className="Btn" type="submit">
          <img
            className="submitBtn"
            src="../Images/icon-arrow.svg"
            alt="submit button"
          />
        </button>
      </form>
      {!isValidEmail && (
        <p className="errorMsg">Please provide a valid email</p>
      )}
    </div>
  );
}
