import { useEffect } from "react";
// Components
import TruckItem from "./Item";
import TruckLoader from "./Loader";
// Modules
import { useDispatch, useSelector } from "react-redux";
// Thunks

import { fetchCampers } from "../../redux/campers/thunks.js";

// Styles
import Css from "./Trucks.module.css";

const TruckList = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.campers);
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={Css.TruckList}>
      {loading && <TruckLoader />}
      {error && <p>Error: {error}</p>}
      {data.items.length > 0
        ? data.items.map((item) => <TruckItem key={item.id} data={item} />)
        : !loading && <p>No trucks found.</p>}
    </div>
  );
};

/**
 * TruckList component that renders a list of trucks.
 *
 * @component
 * @returns {JSX.Element} The rendered truck list component
 */
export default TruckList;
