export default function Button({ onClick, children, className }) {
    return (
      <button onClick={onClick} className={`border-2 p-2 rounded-[6px] ${className}`}>
        {children}
      </button>
    );
  }