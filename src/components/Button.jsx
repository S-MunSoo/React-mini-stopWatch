import React from "react";

const Button = ({ label, code, color }) => {
  // label , code , color 다름 외부로부터 프롭으로 전달받아서 사용한다
  return (
    <div>
      <button
        className={`bg-${color} rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md `}
      >
        <p id="lap-reset-btn-label" className="text-base">
          {label}
        </p>
        <p className="text-xs">{code}</p>
      </button>
      <button className="bg-green-600 rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md">
        <p id="start-stop-btn-label" className="text-base">
          시작
        </p>
        <p className="text-xs">S</p>
      </button>
    </div>
  );
};

export default Button;
