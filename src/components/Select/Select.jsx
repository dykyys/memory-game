import { data } from '../../data/data';
import { Option } from '../Option/Option';
import s from './Select.module.css';
export const Select = ({ handleChange }) => {
  return (
    <>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className={s['form__inner-wrapper']}>
          <label htmlFor={key}>Select a {key}</label>
          <select
            className={s.select}
            name={key}
            id={key}
            onChange={handleChange}
          >
            <Option valueArray={value} />
          </select>
        </div>
      ))}
    </>
  );
};
