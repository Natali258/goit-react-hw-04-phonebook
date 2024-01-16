import s from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={s.titleText}>{title}</h2>
      {children}
    </div>
  );
};
