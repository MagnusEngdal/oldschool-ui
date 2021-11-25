import React from "react";
import "./button.css";

export const Button: React.FC = ({ children }) => {
  return (
    <button className="osui-button osui-c-bg-white osui-shadow--small">
      {children}
    </button>
  );
};
