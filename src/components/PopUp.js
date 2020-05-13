import React, { useState } from "react";
import style from "./popup.module.css";
import InviteForm from "./InviteForm";

export default function PopUp({ toggle }) {
  const [showForm, setShowForm] = useState(true);
  const [formResponse, setFormResponse] = useState({
    message: "",
    success: false,
  });

  const submitForm = () => {
    setShowForm(!showForm);
  };

  const messageSetter = (message, success) => {
    setFormResponse({ message: message, success: success });
  };

  return (
    <div className={style.modal}>
      <div className={style.modal_content}>
        <span className={style.close} onClick={toggle}>
          &times;
        </span>

        {showForm ? (
          <InviteForm
            toggle={toggle}
            submit={submitForm}
            message={messageSetter}
          />
        ) : (
          <div>
            <h4>{formResponse.success ? "All Done!" : "Ooops..."}</h4>
            <p>{formResponse.message}</p>
            <div onClick={toggle}>
              <button className="btn">Ok</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
