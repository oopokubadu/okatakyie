import React, { forwardRef } from "react";

const TextField = ({ label, name, fieldType, errorMessage, ...props }, ref) => {
  return (
    <div>
      <label
        className="font-display text-[15px] leading-[20px] font-medium align-bottom"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="mt-[15px] w-full flex flex-col justify-center">
        {fieldType === "textArea" ? (
          <textarea
            ref={ref}
            className="text-[15px] focus:outline-[#F1F3F7] focus:bg-white bg-[#F1F3F7] leading-[20px] py-[19px] px-[24px] placeholder-primary/50 resize-none"
            name={name}
            id={name}
            rows={4}
            {...props}
          />
        ) : (
          <input
            ref={ref}
            className="text-[15px] focus:outline-[#F1F3F7] focus:bg-white bg-[#F1F3F7] leading-[20px] py-[19px] px-[24px] placeholder-primary/50"
            name={name}
            id={name}
            {...props}
          />
        )}
      </div>
      <div className="h-[26px] leading-5">
        {errorMessage && <small className="text-red-500">{errorMessage}</small>}
      </div>
    </div>
  );
};

export default forwardRef(TextField);
