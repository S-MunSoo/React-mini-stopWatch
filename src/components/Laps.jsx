import React from "react";
import formatTime from "../util/formatTime";
const Laps = ({ laps }) => {
  return (
    <div>
      <article className="text-gray-600 h-64 overflow-auto border-t-2">
        <ul id="laps">
          {laps.map((lap) => (
            <li
              className="flex justify-between py-2 px-3 border-b-2"
              key={lap[0]}
            >
              <span>랩 {lap[0]}</span>
              <span>{formatTime(lap[1])}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Laps;
