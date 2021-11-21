import { configureStore } from "@reduxjs/toolkit";

import dataReducer from "./dataSlice";
import searchReducer from "./searchSice";

export default configureStore({
  reducer: {
    data: dataReducer,
    search: searchReducer,
  },
});
