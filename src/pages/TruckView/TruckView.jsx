import React from "react";

import Css from "./TruckView.module.css";
import Navbar from "../../components/Navbar/Navbar";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa6";
import { IoMapOutline } from "react-icons/io5";
const TruckView = () => {
  const location = useLocation();
  const truckID = location.pathname.split("/").pop();
  const truckData = useSelector((state) => state.campers.data.items).filter(
    (truck) => truck.id === truckID
  )[0];
  console.log("TruckView truckData:", truckData);
  return (
    <div className={Css.Page}>
      <Navbar />
      <div className={Css.Content}>
        <div className={Css.Header}>
          <h2 className={Css.Title}>{truckData.name}</h2>
          <div className={Css.SubTitle}>
            <div className={Css.Reviews}>
              <FaStar color="gold" />
              <span>
                {truckData.rating}
                {" (" + truckData.reviews.length + " Reviews)"}
              </span>
            </div>
            <div className={Css.Location}>
              <IoMapOutline />
              <span>{truckData.location}</span>
            </div>
          </div>
          <span className={Css.Price}>
            € {parseFloat(truckData.price).toFixed(2)}
          </span>
        </div>
        <div className={Css.Body}>
          <ul className={Css.Gallery}>
            {truckData.gallery.map((image, index) => (
              <li key={index} className={Css.GalleryItem}>
                <img src={image.original} alt={`Gallery image ${index + 1}`} />
              </li>
            ))}
          </ul>
          <p className={Css.Description}>{truckData.description}</p>
        </div>
      </div>
    </div>
  );
};
export default TruckView;
