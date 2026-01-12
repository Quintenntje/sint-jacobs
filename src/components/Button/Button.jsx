import "./button.css";

const Button = ({ children, onClick, loading = false, icon = false, progress = 0 }) => {
  return (
    <button
      className={`button ${icon ? "icon" : ""}`}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? `Ervaring aan het laden... ${progress.toFixed(0)}%` : children}
    </button>
  );
};

export default Button;
