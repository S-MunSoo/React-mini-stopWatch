import React from "react";

const Button = ({ label, code, color, onClickHandler }) => {
  // label , code , color 다름 외부로부터 프롭으로 전달받아서 사용한다
  return (
    <div>
      <button
        className={`${color} rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md `}
        onClick={onClickHandler}
      >
        <p id="lap-reset-btn-label" className="text-base">
          {label}
        </p>
        <p className="text-xs">{code}</p>
      </button>
    </div>
  );
};

export default Button;
