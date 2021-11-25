import React from "react";

interface OptionProps {
  selected?: boolean;
}

export const Option: React.FC<OptionProps> = ({ children, selected }) => {
  return (
    <li className={selected ? "dos-bg--turq dos-fg--blue" : undefined}>
      {children}
    </li>
  );
};
