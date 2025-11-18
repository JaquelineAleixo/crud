import React from "react";
import "./FormMessage.css";

function FormMessage({ type = "info", children }) {

  if (!children) {
    return <div className="form-message-empty"></div>;
  }

  const extraClass =
    type === "error" ? "form-message-error" : "form-message-info";

  return (
    <div className={`form-message ${extraClass}`}>
      {children}
    </div>
  );
}

export default FormMessage;
