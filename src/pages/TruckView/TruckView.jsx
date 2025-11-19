import React, { useState } from "react";

import Css from "./TruckView.module.css";
import Navbar from "../../components/Navbar/Navbar";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa6";
import { IoMapOutline } from "react-icons/io5";
import EquipmentItem from "../../components/EquipmentItem/EquipmentItem";
import {
  AC,
  Automatic,
  Bathroom,
  Gas,
  Kitchen,
  Microwave,
  Radio,
  Refrigerator,
  TV,
  Water,
} from "../../components/Icons/Icons";
import ReservationForm from "../../components/ReservationForm/ReservationForm";
import Reviews from "../../components/Reviews/Reviews";
const TruckView = () => {
  const [activeTab, setActiveTab] = useState("features");

  const location = useLocation();
  const truckID = location.pathname.split("/").pop();
  const truckData = useSelector((state) => state.campers.data.items).filter(
    (truck) => truck.id === truckID
  )[0];
  if (!truckData) {
    return <div className={Css.Page}>Truck not found</div>;
  }
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
          <div className={Css.TabsContainer}>
            <ul className={Css.TabList}>
              <li
                onClick={() => setActiveTab("features")}
                className={
                  activeTab === "features"
                    ? [Css.TabItem, Css.Active].join(" ")
                    : Css.TabItem
                }
              >
                <h3 className={Css.Title}>Features</h3>
              </li>
              <li
                onClick={() => setActiveTab("reviews")}
                className={
                  activeTab === "reviews"
                    ? [Css.TabItem, Css.Active].join(" ")
                    : Css.TabItem
                }
              >
                <h3 className={Css.Title}>Reviews</h3>
              </li>
            </ul>
            {activeTab === "features" && (
              <div className={Css.TabContainer}>
                <div
                  className={Css.TabColumn}
                  style={{
                    backgroundColor: "var(--color-inputs)",
                  }}
                >
                  <ul className={Css.EquipmentList}>
                    {truckData.transmission === "automatic" && (
                      <EquipmentItem icon={<Automatic />} title={"Automatic"} />
                    )}
                    {truckData.AC && (
                      <EquipmentItem icon={<AC />} title={"AC"} />
                    )}
                    {truckData.bathroom && (
                      <EquipmentItem icon={<Bathroom />} title={"Bathroom"} />
                    )}
                    {truckData.kitchen && (
                      <EquipmentItem icon={<Kitchen />} title={"Kitchen"} />
                    )}
                    {truckData.TV && (
                      <EquipmentItem icon={<TV />} title={"TV"} />
                    )}
                    {truckData.radio && (
                      <EquipmentItem icon={<Radio />} title={"Radio"} />
                    )}
                    {truckData.refrigerator && (
                      <EquipmentItem
                        icon={<Refrigerator />}
                        title={"Refrigerator"}
                      />
                    )}
                    {truckData.microwave && (
                      <EquipmentItem icon={<Microwave />} title={"Microwave"} />
                    )}
                    {truckData.gas && (
                      <EquipmentItem icon={<Gas />} title={"Gas"} />
                    )}
                    {truckData.water && (
                      <EquipmentItem icon={<Water />} title={"Water"} />
                    )}
                  </ul>

                  <div className={Css.Note}>
                    <h3 className={Css.Title}>Vehicle details</h3>
                    <hr className={Css.Hr} />
                    <ul className={Css.List}>
                      <li className={Css.Item}>
                        <span className={Css.Key}>Form</span>
                        <span className={Css.Value}>{truckData.form}</span>
                      </li>
                      <li className={Css.Item}>
                        <span className={Css.Key}>Length</span>
                        <span className={Css.Value}>{truckData.length}</span>
                      </li>
                      <li className={Css.Item}>
                        <span className={Css.Key}>Width</span>
                        <span className={Css.Value}>{truckData.width}</span>
                      </li>
                      <li className={Css.Item}>
                        <span className={Css.Key}>Height</span>
                        <span className={Css.Value}>{truckData.height}</span>
                      </li>
                      <li className={Css.Item}>
                        <span className={Css.Key}>Tank</span>
                        <span className={Css.Value}>{truckData.tank}</span>
                      </li>
                      <li className={Css.Item}>
                        <span className={Css.Key}>Consumption</span>
                        <span className={Css.Value}>
                          {truckData.consumption}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={Css.TabColumn}
                  style={{
                    border: "1px solid var(--color-gray-light)",
                  }}
                >
                  <ReservationForm />
                </div>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className={Css.TabContainer}>
                <div className={Css.TabColumn}>
                  <Reviews data={truckData.reviews} />
                </div>
                <div
                  className={Css.TabColumn}
                  style={{
                    border: "1px solid var(--color-gray-light)",
                  }}
                >
                  <ReservationForm />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TruckView;
