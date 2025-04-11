import s from './Wrapper.module.css';
export const Wrapper = ({
  children,
  type: Type = 'div',
  accent,
  ref,
  tabIndex,
}) => {
  return (
    <Type
      ref={ref}
      tabIndex={tabIndex}
      className={`${s.wrapper} ${accent ? s.accent : ''}`}
    >
      {children}
    </Type>
  );
};
