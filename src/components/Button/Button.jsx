import "./button.css";

const Button = ({ children, onClick, loading = false }) => {
  return (
    <button className="button" onClick={onClick} disabled={loading}>
      {loading ? "Ervaring aan het laden... " : children}
    </button>
  );
};

export default Button;
