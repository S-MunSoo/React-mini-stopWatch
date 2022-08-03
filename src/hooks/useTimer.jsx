import { useState, useRef } from "react";

const useTimer = () => {
  const [centisecond, setCentisecond] = useState(0);
  const [lapCount, setLapCount] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);
  const [laps, setLaps] = useState([]);

  let prevLap = useRef(0);

  // 스톱워치 시작버튼
  const start = () => {
    let _interval = setInterval(() => {
      setCentisecond((prev) => prev + 1);
    }, 10);
    setTimerInterval(_interval);
    setIsRunning((prev) => !prev);
  };
  // 스톱워치 중단
  const pause = () => {
    clearInterval(timerInterval);
    setTimerInterval(null);
    setIsRunning((prev) => !prev);
  };

  // 스톱워치 랩 생성
  const createLap = () => {
    setLapCount((prev) => prev + 1);
    const lapTime = centisecond - prevLap.current;
    setLaps((prev) => [[lapCount, lapTime], ...prev]);
    prevLap.current = centisecond;
  };
  // 스톱워치 리셋
  const reset = () => {
    setCentisecond(0);
    setLapCount(0); // 랩카운트가 0으로 바뀐다
    prevLap.current = 0; //랩을 누를때마다 이전 클릭과 지금 클릭의 시간 간격을 파악하기 위한 내부 변수를 0
    setLaps([]); //그동안 쌓인 랩스를 빈배열로 바꿔준다
  };

  return { centisecond, start, pause, createLap, reset, isRunning, laps };
};

export default useTimer;
