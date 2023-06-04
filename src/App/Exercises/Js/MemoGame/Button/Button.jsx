import './style.css';

export const Button = ({ onClick, children, isDisabled, isActive }) => {
  const activeClass = isActive ? 'active' : '';

  return (
    <button
      className={`button ${activeClass}`}
      onClick={onClick}
      disabled={isDisabled}
      isActive={isActive}
    >
      {children}
    </button>
  );
};
