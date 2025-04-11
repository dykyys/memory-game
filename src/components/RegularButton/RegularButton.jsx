import clsx from 'clsx';
import s from './RegularButton.module.css';
export default function RegularButton({
  children,
  handleClick,
  type = 'button',
  disabled = false,
  ariaLabel = '',
  ariaLive = '',
  style = 'btn--text',
  className,
}) {
  return (
    <button
      type={type}
      className={clsx(s.btn, { [s[style]]: style, [s[className]]: className })}
      onClick={type === 'button' ? handleClick : null}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-live={ariaLive}
    >
      {children}
    </button>
  );
}

// export default function RegularButton({
//   children,
//   handleClick,
//   type = 'button',
// }) {
//   return (
//     <button
//       type={type}
//       className="btn btn--text"
//       onClick={type === 'button' ? handleClick : null}
//     >
//       {children}
//     </button>
//   );
// }
