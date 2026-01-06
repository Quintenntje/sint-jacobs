import "./button.css";

const Button = ({ children, onClick, loading = false, icon = false }) => {
  return (
    <button
      className={`button ${icon ? "icon" : ""}`}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Ervaring aan het laden... " : children}
    </button>
  );
};

export default Button;
