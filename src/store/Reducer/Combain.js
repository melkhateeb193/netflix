import { combineReducers } from "redux";
import changeLoader from "./Loader";
import Add_Remove_List_Reducers from "./AddOrRemoveOnList";
import moviesReducer from "./MoviesReducer";

const MainReducers =combineReducers({
    movies: moviesReducer,
    moviesList:Add_Remove_List_Reducers,
    loader:changeLoader,

})
export default MainReducers;