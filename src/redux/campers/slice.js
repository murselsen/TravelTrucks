import { createSlice } from "@reduxjs/toolkit";

import { fetchCampers, moreFetchCampers } from "./thunks.js";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    data: {
      items: [],
      total: 0,
      limit: 4,
      page: 1,
      favorites: [],
    },
    filter: {
      location: "",
      equipment: [],
      type: "",
    },
    loading: false,
    error: null,
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: (builder) => {
    // Add your extra reducers here
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.data.items = action.payload.items;
        state.data.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(moreFetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(moreFetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.data.page += 1;
        state.data.items = [...state.data.items, ...action.payload.items];
        state.data.total = action.payload.total;
      })
      .addCase(moreFetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default campersSlice.reducer;
