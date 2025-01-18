import React from "react";

function Button({ children, className = "", ...props }) {
  return (
    <button
      className={
        "text-white bg-accent hover:bg-[#1B81CE] transition py-[15.2px] px-[37px] text-[15px] leading-[20px] font-semibold " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
