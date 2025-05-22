# React Counter - App 만들기 (미니프로젝트 🕰️ 2025.05.22)

# useEffect()사용하기

`  useEffect(() => {}, []);`

1. 첫번째 인수 : 콜백함수
2. 두번째 인수 : 배열

## useEffect()동작 순서

1. 배열의 값이 바뀌면
2. sideEffect 효과로서, 콜백함수를 실행시킴

### 예시

1. 배열에 변화되는 값 (state) 을 넣으면, state상태가 바뀔 때마다, 콜백함수가 실행
2. 🤔배열이 바뀔때 마다 콜백함수가 실행되는거니, `배열`에 의존하게 됨.
   > useEffect() 사용되는 배열을 '의존성 배열 ( dependency array = deps )`이라고 부름.

## 의존성배열 (deps)

- deps는 값을 여러개 넣어도 된다.
