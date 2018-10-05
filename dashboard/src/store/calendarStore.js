import { createStore } from "redux";
import calendarReducer from "../reducers/calendarReducer";

const calendarStore = createStore(calendarReducer);

export default calendarStore;
