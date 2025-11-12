import { useEffect } from "react";
// Components
import TruckItem from "./Item";
import TruckLoader from "./Loader";
// Modules
import { useDispatch, useSelector } from "react-redux";
// Thunks

import { fetchCampers, moreFetchCampers } from "../../redux/campers/thunks.js";

// Styles
import Css from "./Trucks.module.css";

const TruckList = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.campers);
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(moreFetchCampers());
  };

  return (
    <div className={Css.TruckList}>
      {loading && <TruckLoader />}
      {error && <p>Error: {error}</p>}
      {data.items.length > 0
        ? data.items.map((item, index) => <TruckItem key={index} data={item} />)
        : !loading && <p>No trucks found.</p>}
      {data.items.length < data.total && !loading && (
        <button className={Css.LoadMoreButton} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default TruckList;
