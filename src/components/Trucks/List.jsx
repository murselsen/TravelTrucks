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

      {data.items.length > 0
        ? data.items.map((item, index) => <TruckItem key={index} data={item} />)
        : !loading && (
            <ContentLoader
              width={"900"}
              height={"300"}
              viewBox="0 0 900 300"
              backgroundColor="#00000088"
              foregroundColor="#8d5353ff"
            >
              {/* <rect x="4" y="8" rx="3" ry="3" width="7" height="288" /> */}
              {/* <rect x="6" y="289" rx="3" ry="3" width="669" height="8" /> */}
              {/* <rect x="670" y="9" rx="3" ry="3" width="6" height="285" /> */}
              <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
              <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
              <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
              <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
              <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
              <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
              {/* <rect x="5" y="8" rx="3" ry="3" width="669" height="7" /> */}
              <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
              <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
              <rect x="376" y="41" rx="3" ry="3" width="251" height="29" />
            </ContentLoader>
          )}
      {data.items.length < data.total && !loading && (
        <button className={Css.LoadMoreButton} onClick={handleLoadMore}>
          Load More
        </button>
      )}
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default TruckList;
