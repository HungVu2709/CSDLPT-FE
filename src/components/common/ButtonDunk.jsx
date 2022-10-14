import React from "react";

const ButtonDunk = ({ type, text, onClick }) => {
  return (
    <button type={type} className="btn-dunk" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonDunk;
