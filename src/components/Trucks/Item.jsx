import Css from "./Trucks.module.css";
const TruckItem = ({ data }) => {
  const { gallery, name, description } = data;
  return (
    <div className={Css.TruckItem}>
      <img
        src={gallery[0].original}
        alt="Truck Image"
        className={Css.TruckImage}
      />
      <div className={Css.TruckDetails}>
        <h3 className={Css.TruckTitle}>{name}</h3>
        <p className={Css.TruckDescription}>{description}</p>
      </div>
    </div>
  );
};
export default TruckItem;
