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

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/campers/slice.js";
import { fetchCampersByFilter } from "../../redux/campers/thunks.js";

const Sidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.campers.filter);
  return (
    <Formik
      initialValues={filters}
      onChange={() => {
        console.log("changing");
      }}
      onSubmit={(values) => {
        dispatch(setFilter(values));
        dispatch(fetchCampersByFilter());
      }}
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
                <label className={Css.EquipmentItem}>
                  <Field type="checkbox" name="equipment" value="AC" />
                  <AC />
                  <span className={Css.EquipmentItem_Title}>AC</span>
                </label>

                <label className={Css.EquipmentItem}>
                  <Field
                    type="checkbox"
                    name="equipment.engine"
                    value={"automatic"}
                  />
                  <Automatic />
                  <span className={Css.EquipmentItem_Title}>Automatic</span>
                </label>

                <label className={Css.EquipmentItem}>
                  <Field type="checkbox" name="equipment" value="kitchen" />
                  <Kitchen />
                  <span className={Css.EquipmentItem_Title}>Kitchen</span>
                </label>

                <label className={Css.EquipmentItem}>
                  <Field type="checkbox" name="equipment" value="TV" />
                  <TV />
                  <span className={Css.EquipmentItem_Title}>TV</span>
                </label>

                <label className={Css.EquipmentItem}>
                  <Field type="checkbox" name="equipment" value="bathroom" />
                  <Bathroom />
                  <span className={Css.EquipmentItem_Title}>Bathroom</span>
                </label>
              </div>
            </div>
            <div className={Css.VehicleFilters}>
              <h3 className={Css.Title}>Vehicle Type</h3>
              <hr className={Css.Hr} />
              <div className={Css.EquipmentSelection}>
                <label className={Css.EquipmentItem}>
                  <Field type="radio" name="type" value="paneltruck" />
                  <Van />
                  <span className={Css.EquipmentItem_Title}>Van</span>
                </label>

                <label className={Css.EquipmentItem}>
                  <Field type="radio" name="type" value="integrated" />
                  <Integrated />
                  <span className={Css.EquipmentItem_Title}>
                    Fully Integrated
                  </span>
                </label>

                <label className={Css.EquipmentItem}>
                  <Field type="radio" name="type" value="alcove" />
                  <Alcove />
                  <span className={Css.EquipmentItem_Title}>Alcove</span>
                </label>
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
