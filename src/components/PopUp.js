import React, { useState } from "react";
import style from "./popup.module.css";
import InviteForm from "./InviteForm";

export default function PopUp({ toggle }) {
  const [showForm, setShowForm] = useState(true);
  const [message, setMessage] = useState("");

  const submitForm = () => {
    setShowForm(!showForm);
  };

  const messageSetter = (message) => {
    setMessage(message);
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
            submitt={submitForm}
            message={messageSetter}
          />
        ) : (
          <div>
            <h4>All Done!</h4>
            <p>{message}</p>

            <div onClick={toggle}>
              <button className="btn">Ok</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
