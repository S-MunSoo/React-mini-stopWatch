import React from "react";
import formatTime from "../util/formatTime";

const Timer = ({ centisecond }) => {
  return (
    <div>
      <h1
        id="timer"
        className="text-5xl text-center pb-8 font-extrabold tracking-tighter break-words"
      >
        {formatTime(centisecond)}
      </h1>
    </div>
  );
};

export default Timer;
