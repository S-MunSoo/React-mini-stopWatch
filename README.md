## ⏰ React 미니 사전과제 학습 #2 스톱워치

### 타이머 custom hook 사용
```
npm i use-timer
```
#### custom hook state

- centisecond : 현재 스톱워치의 시간 (단위: centisecond)
- lapCount : 현재 스톱워치의 누적 Lap 갯수
- isRunning : 스톱워치의 실행 여부를 나타내는 flag
- timerInterval : start() 시 실행되는 setInterval이 리턴하는 intervalID
- laps : 현재 스톱워치의 laps 객체 [현재 lap의 순번, 현재 lap 시간]

#### custom hook function

- start : 스톱워치 시작하기 null
- pause : 스톱워치 중단(일시정지)하기 null
- createLap : 스톱워치 Lap 생성하기 null
- reset : 스톱워치 리셋하기 null

### 요구사항 ✅

##### 1. 시작,중단 기능

- s버튼을 클릭하면 스톱워치가 시작된다
- 좌측의 리셋 L 버튼이 랩 L 버튼으로, 우측의 시작 S 버튼이 중단 S 버튼으로 변경됩니다. 라벨 뿐만 아니라 버튼의 스타일도 사진과 동일하게 변경되어야 한다.
