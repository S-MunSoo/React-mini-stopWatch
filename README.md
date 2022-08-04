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
- 스톱워치가 일시 정지되고, 스톱워치의 시간이 멈춥니다.

##### 2. 시간 포맷팅 구현

스톱워치 모듈에서 내려받은 centisecond는 다음과 같은 포맷을 가져야 한다.

아래와 같은 포맷을 가지도록 스톱워치의 시간 출력 형태를 변경해줘야 한다.

[분]:[초].[100/1 초 = centisecond]

##### 3. 랩 기능

- L버튼 클릭시 Lap Count가 함께 명시된 랩이 하나씩 기록된다.
- 최신 Lap이 순서대로 맨위에 추가 된다.

##### 3. 리셋 기능

- L버튼을 클릭하면 스톱워치 시간이 초기화 된다.
- 모든 랩이 사라진다.
