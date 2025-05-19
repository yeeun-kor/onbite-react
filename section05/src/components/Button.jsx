const Button = ({ text, color = "black", children }) => {
  return (
    <button
      onClick={() => {
        console.log({ text });
      }}
      style={{ color: color }}
    >
      {text}- {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
