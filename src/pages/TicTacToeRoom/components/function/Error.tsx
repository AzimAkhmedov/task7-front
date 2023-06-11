import React from "react";
interface IError {
  display: string;
  message: string | null;
}
const Error = ({ display, message }: IError) => {
  return (
    <div className="error" style={{ opacity: display ? "100%" : "0" }}>
      <h1 className="error-message">{message}</h1>
    </div>
  );
};

export default Error;
