import React from "react";
import Button from "./Button";
import Laps from "./Laps";
import Timer from "./Timer";
import useTimer from "../hooks/useTimer";
import { useEffect, useRef } from "react";

const StopWatch = () => {
  const { start, centisecond, isRunning, pause, createLap, laps, reset } =
    useTimer();

  const lapResetRef = useRef(null);
  const lapStartRef = useRef(null);
  //  handler 클릭이벤트를 실행시키기 위해 돔에 직접 접근필요 useRef 훅을 이용한다
  const handler = (e) => {
    if (e.code === "KeyL") {
      //  isRuning = ture ? 랩 : reset
      lapResetRef.current.click();
    }
    if (e.code === "KeyS") {
      //  isRuning = true ? pause : start
      lapStartRef.current.click();
    }
  };
  // document.addEventListener("keydown", () => console.log("KEYDOWN")); 리액트 특성상 돔을 직접 제어하기 위해 서는 최초 1회만 렌더링 될 수 있을려면 useEffecf 훅을 사용해라
  // useEffect는 어떤 특정값이 변경 될때만 최초 1회 어떤 콜백함수를 의존성 배열없이 실행시켜 준다.
  useEffect(() => {
    document.addEventListener("keydown", handler);
    //useEffect는 clean-up : 훅내에서 구독이거나 이벤트 핸들러가 없어질때 언마운트 될때  없애주고 싶을떄 실행 사용방법 : 훅내에서 함수를 리턴해주면된다.
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  return (
    <div>
      <section className="w-fit bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center m-auto mt-36 max-w-sm">
        <Timer centisecond={centisecond} />
        <div className="flex justify-between text-white pb-8 text-sm select-none">
          <Button
            label={isRunning ? "랩" : "리셋"}
            code="L"
            color="bg-gray-600"
            onClickHandler={isRunning ? createLap : reset}
            ref={lapResetRef}
          />
          <Button
            label={isRunning ? "중단" : "시작"}
            code="S"
            color={isRunning ? "bg-red-600" : "bg-green-600"}
            onClickHandler={isRunning ? pause : start}
            ref={lapStartRef}
          />
        </div>
        <Laps laps={laps} />
      </section>
    </div>
  );
};

export default StopWatch;
