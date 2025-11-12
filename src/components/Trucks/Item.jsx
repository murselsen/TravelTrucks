// Styles
import Css from "./Trucks.module.css";

// Components
import EquipmentItem from "../EquipmentItem/EquipmentItem.jsx";
// Icons
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { BiEuro } from "react-icons/bi";
import { IoMapOutline } from "react-icons/io5";

import {
  AC,
  Bathroom,
  TV,
  Kitchen,
  Automatic,
  Gas,
  Microwave,
  Petrol,
  Radio,
  Refrigerator,
  Water,
} from "../Icons/Icons.jsx";

const TruckItem = ({ data }) => {
  const { gallery, name, description, id, location } = data;
  return (
    <div className={Css.TruckItem}>
      <img src={gallery[0].original} alt="Truck Image" className={Css.Image} />
      <div className={Css.Content}>
        <div className={Css.Header}>
          <div className={Css.Title}>
            <h2 className={Css.Name}>{name}</h2>
            <span className={Css.Price}>
              <BiEuro /> {parseFloat(data.price).toFixed(2)}
            </span>
            <button className={Css.FavoriteButton}>
              <FaHeart color="black" />
            </button>
          </div>
          <div className={Css.SubTitle}>
            <div className={Css.Reviews}>
              <FaStar color="gold" />
              <span>
                {data.rating}
                {" (" + data.reviews.length + " Reviews)"}
              </span>
            </div>
            <div className={Css.Location}>
              <IoMapOutline />
              <span>{location}</span>
            </div>
          </div>
        </div>
        <div className={Css.Body}>
          <p className={Css.Description}>{description}</p>
          <div className={Css.Equipment}>
            {<EquipmentItem icon={<Automatic />} title={data.transmission} />}

            {data.AC && <EquipmentItem icon={<AC />} title={"ac"} />}
            {data.bathroom && (
              <EquipmentItem icon={<Bathroom />} title={"bathroom"} />
            )}
            {data.kitchen && (
              <EquipmentItem icon={<Kitchen />} title={"kitchen"} />
            )}
            {data.TV && <EquipmentItem icon={<TV />} title={"tv"} />}

            {data.radio && <EquipmentItem icon={<Radio />} title={"radio"} />}
            {data.Refrigerator && (
              <EquipmentItem icon={<Refrigerator />} title={"refrigerator"} />
            )}
            {data.microwave && (
              <EquipmentItem icon={<Microwave />} title={"microwave"} />
            )}
            {data.gas && <EquipmentItem icon={<Gas />} title={"gas"} />}
            {<EquipmentItem icon={<Petrol />} title={data.engine} />}
            {data.water && <EquipmentItem icon={<Water />} title={"water"} />}
          </div>
        </div>
        <div className={Css.Footer}>
          <a href={"/catalog/" + id} className={Css.Button}>
            Show more
          </a>
        </div>
      </div>
    </div>
  );
};
export default TruckItem;
