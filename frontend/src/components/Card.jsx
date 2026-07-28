function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-slate-800 rounded-2xl shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
