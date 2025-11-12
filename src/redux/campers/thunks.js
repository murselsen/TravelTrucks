import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (payload, thunkAPI) => {
    try {
      const params = {
        page: thunkAPI.getState().campers.data.page,
        limit: thunkAPI.getState().campers.data.limit,
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
      const currentPage = thunkAPI.getState().campers.data.page;
      const limit = thunkAPI.getState().campers.data.limit;
      const response = await axios.get("/", {
        params: {
          page: currentPage + 1,
          limit: limit,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
