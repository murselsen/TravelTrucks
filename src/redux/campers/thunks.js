import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

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

      if (filters.location) {
        params.location = filters.location;
      }
      // if (filters.equipment) {
      //   const equipmentKeys = Object.keys(filters.equipment);

      //   equipmentKeys.forEach((key) => {
      //     if (filters.equipment[key]) {
      //       params[key] = true;
      //     }
      //   });
      // }
      //  Simplified equipment filtering to include all selected equipment
      if (filters.type !== "") {
        params.form = filters.type;
      }

      console.log("moreFetchCampers params:", params);
      const response = await axios.get("/", { params });
      console.log("moreFetchCampers response:", response.data);
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
        page: thunkAPI.getState().campers.page,
        limit: thunkAPI.getState().campers.limit,
      };

      if (filters.location) {
        params.location = filters.location;
      }
      if (filters.equipment) {
        params[filters.equipment] = true;
      }
      if (filters.type) {
        params.type = filters.type;
      }
      const result = await axios.get("/", { params });
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
