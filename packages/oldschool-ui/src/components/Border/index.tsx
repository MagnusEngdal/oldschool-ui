import React from "react";

export const Border: React.FC = ({ children }) => {
  return (
    <div className="dos-border">
      <div className="dos-border--inner dos-bc--turq-light">
        <div className="dos-border--inner dos-bc--turq-light">{children}</div>
      </div>
    </div>
  );
};
