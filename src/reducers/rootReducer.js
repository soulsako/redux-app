import { combineReducers } from "redux";
import { reducerUser } from "./reducerUser";

const APP_REDUCERS = { reducerUser };

const rootReducer = combineReducers(APP_REDUCERS);

export default rootReducer;
