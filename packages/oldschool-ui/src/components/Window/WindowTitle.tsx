import React from "react";

export const WindowTitle: React.FC = ({ children }) => {
  return (
    <div className="dos-window-title">
      <div className="dos-window-title--inner dos-fg--blue dos-bg--turq">
        {children}
      </div>
    </div>
  );
};
