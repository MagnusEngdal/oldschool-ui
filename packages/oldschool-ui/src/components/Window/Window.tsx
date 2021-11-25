import React from "react";
import { WindowTitle } from "./WindowTitle";
import { Border } from "./../Border";

interface WindowProps {
  title?: string;
}

export const Window: React.FC<WindowProps> = ({ children, title }) => {
  return (
    <div className="dos-window dos-bg--blue dos-fg--turq-light">
      <WindowTitle>{title}</WindowTitle>
      <Border>{children}</Border>
    </div>
  );
};
