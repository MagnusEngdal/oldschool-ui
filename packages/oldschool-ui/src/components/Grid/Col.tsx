import React from "react";

interface Props {
  span?: number;
}

export const Col: React.FC<Props> = ({ children, span = 24 }) => {
  return (
    <div className="dos-col" style={{ gridColumn: `span ${span}` }}>
      {children}
    </div>
  );
};
