import { IoMapOutline } from "react-icons/io5";
import Filters from "../Filters/Filters";
import Css from "./Sidebar.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  AC,
  Alcove,
  Automatic,
  Bathroom,
  Integrated,
  Kitchen,
  TV,
  Van,
} from "../Icons/Icons";

const Sidebar = () => {
  return (
    <Formik
      initialValues={{ equipment: "", location: "", type: "" }}
      onSubmit={() => {}}
    >
      <Form>
        <div className={Css.Area}>
          <Filters title="Location">
            <div className={Css.InputWrapper}>
              <div className={Css.Group}>
                <IoMapOutline size={20} />
                <Field
                  type="text"
                  className={Css.Input}
                  name="location"
                  placeholder="Enter location"
                />
              </div>
              <ErrorMessage
                name="location"
                component="div"
                className={Css.Error}
              />
            </div>
          </Filters>
          <Filters title="Filters">
            <div className={Css.VehicleFilters}>
              <h3 className={Css.Title}>Vehicle Equipment</h3>
              <hr className={Css.Hr} />
              <div className={Css.EquipmentSelection}>
                <label className={Css.EquipmentItem} htmlFor="ac">
                  <AC />
                  <span className={Css.EquipmentItem_Title}>AC</span>
                </label>
                <label className={Css.EquipmentItem} htmlFor="engine">
                  <Automatic />
                  <span className={Css.EquipmentItem_Title}>Automatic</span>
                </label>
                <label className={Css.EquipmentItem} htmlFor="kitchen">
                  <Kitchen />
                  <span className={Css.EquipmentItem_Title}>Kitchen</span>
                </label>
                <label className={Css.EquipmentItem} htmlFor="tv">
                  <TV />
                  <span className={Css.EquipmentItem_Title}>TV</span>
                </label>
                <label className={Css.EquipmentItem} htmlFor="bathroom">
                  <Bathroom />
                  <span className={Css.EquipmentItem_Title}>Bathroom</span>
                </label>
                <Field type="radio" name="equipment" id="ac" value="ac" />
                <Field
                  type="radio"
                  name="equipment"
                  id="kitchen"
                  value="kitchen"
                />
                <Field
                  type="radio"
                  name="equipment"
                  id="engine"
                  value="automatic"
                />
                <Field type="radio" name="equipment" id="tv" value="tv" />
                <Field
                  type="radio"
                  name="equipment"
                  id="bathroom"
                  value="bathroom"
                />
              </div>
            </div>
            <div className={Css.VehicleFilters}>
              <h3 className={Css.Title}>Vehicle Equipment</h3>
              <hr className={Css.Hr} />
              <div className={Css.EquipmentSelection}>
                <label className={Css.EquipmentItem} htmlFor="van">
                  <Van />
                  <span className={Css.EquipmentItem_Title}>Van</span>
                </label>
                <label className={Css.EquipmentItem} htmlFor="integrated">
                  <Integrated />
                  <span className={Css.EquipmentItem_Title}>
                    Fully Integrated
                  </span>
                </label>
                <label className={Css.EquipmentItem} htmlFor="alcove">
                  <Alcove />
                  <span className={Css.EquipmentItem_Title}>Alcove</span>
                </label>
                <Field type="radio" name="type" id="van" value="van" />
                <Field
                  type="radio"
                  name="type"
                  id="integrated"
                  value="integrated"
                />
                <Field type="radio" name="type" id="alcove" value="alcove" />
              </div>
            </div>
          </Filters>

          <button type="submit" className={Css.ApplyButton}>
            Search
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default Sidebar;
