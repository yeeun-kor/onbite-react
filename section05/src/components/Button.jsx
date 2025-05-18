const Button = ({ text, color, children }) => {
  return (
    <button style={{ color: color }}>
      {text}- {color}
      {children}
    </button>
  );
};

export default Button;
