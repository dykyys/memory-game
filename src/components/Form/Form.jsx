import { useRef, useEffect } from 'react';
import RegularButton from '../RegularButton/RegularButton';
import { Select } from '../Select/Select';
import s from './Form.module.css';
import { Text } from '../Text/text';

export default function Form({ handleSubmit, handleChange, isFirstRender }) {
  const divRef = useRef(null);

  useEffect(() => {
    !isFirstRender && divRef.current.focus();
  }, [isFirstRender]);

  return (
    <div className={s['form-container']} ref={divRef} tabIndex={-1}>
      <Text
        size="regular"
        text="Customize the game by selecting an emoji category and a number of memory
        cards."
      />
      <form className={s.form} onSubmit={handleSubmit}>
        <Select handleChange={handleChange} />
        <RegularButton type="submit">Start Game</RegularButton>
      </form>
    </div>
  );
}
