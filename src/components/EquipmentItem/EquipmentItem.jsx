import Css from "./EquipmentItem.module.css";

const EquipmentItem = ({ icon, title }) => {
  return (
    <div className={Css.EquipmentItem}>
      {icon}
      <span className={Css.Title}>{title}</span>
    </div>
  );
};

export default EquipmentItem;
