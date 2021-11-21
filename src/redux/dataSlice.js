import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const res = await Axios.get(
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
  );
  const data = res.data;

  return data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    status: "",
    all: [],
    data: [],
    shortlisted: [],
    rejected: [],
  },
  reducers: {
    addShortlisted: (state, { payload }) => {
      const shortlist = state.shortlisted.findIndex(
        (ele) => ele.id === payload.id
      );
      const reject = state.rejected.findIndex((ele) => ele.id === payload.id);
      if (shortlist === -1 && reject === -1) {
        state.shortlisted.push(payload);
        state.data = state.data.filter((ele) => ele.id !== payload.id);
      }
    },
    addRejected: (state, { payload }) => {
      const shortlist = state.shortlisted.findIndex(
        (ele) => ele.id === payload.id
      );
      const reject = state.rejected.findIndex((ele) => ele.id === payload.id);
      if (shortlist === -1 && reject === -1) {
        state.rejected.push(payload);
        state.data = state.data.filter((ele) => ele.id !== payload.id);
      }
    },
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.all = payload;
      state.status = "success";
    },
    [fetchData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { addShortlisted, addRejected } = dataSlice.actions;

export default dataSlice.reducer;
