import React from "react";
import formatTime from "../util/formatTime";

const Laps = ({ laps }) => {
  // laps 변형
  // reducer() 함수는 배열의 각 요소에 대해 주어진 결과값을 실행하고 하나의 결과값만 반환한다.
  // arr.reducer((누산기값 , 현재값) => 누산기값 +  현재값)

  // reuduce 대체 2번째 방법
  // const lapTimeArr2 = [];
  // laps.forEach((lap) => {
  //   lapTimeArr2.push(lap[1]);
  // });
  const lapTimeArr = laps.reduce((acc, cur) => [...acc, cur[1]], []);

  // 최대,최솟값 뽑아내기
  const maxIndex = lapTimeArr.indexOf(Math.max(...lapTimeArr));
  const minIndex = lapTimeArr.indexOf(Math.min(...lapTimeArr));

  const minMaxStyle = (idx) => {
    if (laps.length < 2) return;
    if (idx === maxIndex) return "text-red-600";
    if (idx === minIndex) return "text-blue-600";
  };

  return (
    <div>
      <article className="text-gray-600 h-64 overflow-auto border-t-2">
        <ul id="laps">
          {laps.map((lap, idx) => (
            <li
              className={`flex justify-between py-2 px-3 border-b-2 ${minMaxStyle(
                idx
              )}`}
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
