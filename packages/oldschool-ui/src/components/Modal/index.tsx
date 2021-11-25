import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

export const Modal: React.FC = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="osui-modal">
      <div className="osui-modal--inner osui-c-bg-gray osui-c-black osui-shadow--big">
        {children}
      </div>
    </div>,
    document.body
  );
};
