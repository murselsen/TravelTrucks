// Modules
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// Thunks
import { fetchCampers } from "../../redux/campers/thunks";
// Styles
import Css from "./Catalog.module.css";

// Components
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import TruckList from "../../components/Trucks/List";

const Catalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

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
