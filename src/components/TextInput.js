import React from "react";

const TextInput = (props) => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.onChange} />
      <p style={{ color: "#d70c0c" }}>
        {!props.validInput && props.errorMessage}
      </p>
    </div>
  );
};

export default TextInput;
