import s from './Filter.module.css';

export const Filter = ({ filter }) => {
  return (
    <div className={s.search}>
      <span className={s.label}>Find contacts by name</span>
      <input
        onChange={filter}
        type="text"
        name="name"
        required
        className={s.input}
      />
    </div>
  );
};
