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
import ContentLoader from "react-content-loader";

const TruckList = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.campers);
  const handleLoadMore = () => {
    dispatch(moreFetchCampers());
  };

  return (
    <div className={Css.TruckList}>
      {loading && <TruckLoader />}

      {data.items.length > 0 &&
        data.items.map((item, index) => <TruckItem key={index} data={item} />)}
      {error && <h1>{error}</h1>}
      {data.items.length < data.total && !loading && (
        <button className={Css.LoadMoreButton} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default TruckList;
