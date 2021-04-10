import style from './Section.module';

const Section = ({ title, children }) => {
  return (
    <section>
      <hi className={style.title}>{title}</hi>
      {children}
    </section>
  );
};

export default Section;
