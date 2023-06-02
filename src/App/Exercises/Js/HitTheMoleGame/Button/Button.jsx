import './Button.css';

export const Button = ({ children, isActive, onClick }) => {
  // const highlightClass = 'button-active';
  // const buttonClasses = 'button' + highlightClass;

  return (
    <button
      //shorthand if in React

      className={`button ${isActive === true ? 'button-active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
