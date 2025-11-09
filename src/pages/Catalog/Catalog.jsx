import Css from "./Catalog.module.css";

// Components
import Navbar from "../../components/Navbar/Navbar";

const Catalog = () => {
  return (
    <div className={Css.Page}>
      <Navbar />
      <div className={Css.Main}>
        <div className={Css.Sidebar}></div>
        <div className={Css.Content}></div>
      </div>
    </div>
  );
};

export default Catalog;
