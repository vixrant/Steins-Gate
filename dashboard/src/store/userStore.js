import { createStore } from "redux";
import userReducer from "../reducers/userReducer";

const userStore = createStore(userReducer);

export default userStore;
