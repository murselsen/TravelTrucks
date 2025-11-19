import Css from "./Filters.module.css";

const Filters = ({ title, children }) => {
  return (
    <div className={Css.Filters}>
      <p className={Css.Title}>{title}</p>
      <div className={Css.Content}>
        {/* Filter options will go here */}
        {children}
      </div>
    </div>
  );
};

export default Filters;
