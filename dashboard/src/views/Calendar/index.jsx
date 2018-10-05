import React from "react";

import { Provider } from "react-redux";
import calendarStore from "../../store/calendarStore";

import Calendar from "./Calendar";

class CalendarPage extends React.Component {
  render = _ => (
    <Provider store={calendarStore}>
      <Calendar />
    </Provider>
  );
}

export default CalendarPage;
