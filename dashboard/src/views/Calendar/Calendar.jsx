import React from "react";
import BigCalendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = BigCalendar.momentLocalizer(moment);
let events = [];

class SemesterCalendar extends React.Component {
  render = _ => (
    <div style={{ height: 100 + "vh" }}>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
      />
    </div>
  );
}

export default SemesterCalendar;
