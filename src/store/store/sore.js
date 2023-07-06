import { configureStore } from "@reduxjs/toolkit";
import Add_Remove_List_Reducers from "../Reducer/Combain";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    myList: Add_Remove_List_Reducers,
  },
  middleware: [thunk],
});

export default store;
