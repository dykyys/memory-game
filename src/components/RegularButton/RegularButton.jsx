export default function RegularButton({
  children,
  handleClick,
  type = 'button',
}) {
  return (
    <button
      type={type}
      className="btn btn--text"
      onClick={type === 'button' ? handleClick : null}
    >
      {children}
    </button>
  );
}
