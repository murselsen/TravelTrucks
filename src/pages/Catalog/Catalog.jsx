// Modules

// Styles
import Css from "./Catalog.module.css";

// Components
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import TruckList from "../../components/Trucks/List";

const Catalog = () => {
  return (
    <div className={Css.Page}>
      <Navbar />
      <div className={Css.Main}>
        <div className={Css.Sidebar}>
          <Sidebar />
        </div>
        <div className={Css.Content}>
          <TruckList />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
