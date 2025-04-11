import clsx from 'clsx';
import s from './Text.module.css';
export const Text = ({ text, size, type: Type = 'p', className }) => {
  return (
    <Type className={clsx({ [s[size]]: size, [s[className]]: className })}>
      {text}
    </Type>
  );
};
