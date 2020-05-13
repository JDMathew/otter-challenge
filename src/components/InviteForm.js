import React, { useState } from "react";
import { useInput } from "./hooks/input-hook";
import TextInput from "./TextInput";
import axios from "axios";
import {
  validateEmail,
  validateName,
  validateMatchingEmail,
} from "../utils/inputValidations";

export default function InviteForm({ toggle, submitt, message }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [confirmEmailValid, setConfirmEmailValid] = useState(true);

  const [validateOnChange, setValidateOnChange] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setValidateOnChange(true);
    const nameValid = validateName(name);
    const emailValid = validateEmail(email);
    const confirmEmailValid = validateMatchingEmail(email, confirmEmail);

    setNameValid(nameValid);
    setEmailValid(emailValid);
    setConfirmEmailValid(confirmEmailValid);

    if (nameValid && emailValid && confirmEmailValid) {
      await axios
        .post(
          ` https://yo7dm2sa2i.execute-api.eu-west-2.amazonaws.com/prod/signup`,
          { name: name, email: email }
        )
        .then((res) => {
          if (res.status === 200) {
            message(res.data.success);
            submitt();
          }
          //console.log(res);
          //console.log(res.data.success);
        })
        .catch((error) => {
          if (error.response.status === 500) {
            alert(error.response.data.error);
            toggle();
          } else if (error.response.status === 400) {
            alert(error.response.data.error);
            toggle();
          } else {
            alert(error.response.data.error);
            toggle();
          }
        });
    }
  };

  const onChangeName = (name) => {
    if (validateOnChange) {
      const nameValid = validateName(name);
      setName(name.target.value);
    } else {
      setName(name.target.value);
    }
  };

  function onChangeEmail(email) {
    if (validateOnChange) {
      const emailValid = validateEmail(email);
      setEmail(email.target.value);
    } else {
      setEmail(email.target.value);
    }
  }

  function onChangeConfirmEmail(confirmEmail) {
    if (validateOnChange) {
      const confirmEmailValid = validateMatchingEmail(confirmEmail);
      setConfirmEmail(confirmEmail.target.value);
    } else {
      setConfirmEmail(confirmEmail.target.value);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Request an invite!</h4>
        <label>
          Name:
          <TextInput
            value={name}
            onChange={onChangeName}
            validInput={nameValid}
            errorMessage="Please enter a name longer than 2 characters"
          />
        </label>
        <label>
          Email:
          <TextInput
            value={email}
            onChange={onChangeEmail}
            validInput={emailValid}
            errorMessage="Please enter a valid email"
          />
        </label>
        <label>
          Confirm email:
          <TextInput
            value={confirmEmail}
            onChange={onChangeConfirmEmail}
            validInput={confirmEmailValid}
            errorMessage="Please enter a matching email"
          />
        </label>
        <br />
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}
