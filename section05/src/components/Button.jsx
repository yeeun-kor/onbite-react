const Button = ({ text, color = "black", children }) => {
  // 이벤트 객체 
  // 이벤트 핸들러 함수가 호출되면, 무조건 이벤트 객체가 생성됨.
  const onClickButton = (e) => {
    console.log(e)
    console.log(text)
  }
  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text}- {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
