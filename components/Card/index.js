import React from "react";

function Card({ className, children }) {
  return (
    <div className={"border border-[#E8E8ED] " + className}>{children}</div>
  );
}

export default Card;
