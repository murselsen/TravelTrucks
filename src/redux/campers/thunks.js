import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

const filterFormatted = (filters, params) => {
  const filterParams = {};
  if (filters.location !== "") {
    filterParams.location = filters.location;
  }
  if (filters.type !== "") {
    filterParams.form = filters.type;
  }
  filters.equipment.forEach((item) => {
    item === "automatic" && (filterParams["transmission"] = "automatic");
    filterParams[item] = true;
  });
  Object.assign(filterParams, params);
  return filterParams;
};

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (payload, thunkAPI) => {
    try {
      const params = {
        page: 1,
        limit: thunkAPI.getState().campers.limit,
      };

      const response = await axios.get("/", {
        params: params,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const moreFetchCampers = createAsyncThunk(
  "campers/moreFetchCampers",
  async (payload, thunkAPI) => {
    try {
      const filters = thunkAPI.getState().campers.filter;
      const params = {
        page: thunkAPI.getState().campers.page,
        limit: thunkAPI.getState().campers.limit,
      };
      const formattedParams = filterFormatted(filters, params);
      const response = await axios.get("/", { params: formattedParams });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchCampersByFilter = createAsyncThunk(
  "campers/fetchCampersByFilter",
  async (filter, thunkAPI) => {
    try {
      const filters = thunkAPI.getState().campers.filter;
      const params = {
        page: 1,
        limit: thunkAPI.getState().campers.limit,
      };
      const formattedParams = filterFormatted(filters, params);
      const result = await axios.get("/", { params: formattedParams });
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
