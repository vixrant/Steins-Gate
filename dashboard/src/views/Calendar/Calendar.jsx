import React from "react";
import BigCalendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import axios from "axios";

import { connect } from "react-redux";
import calendarActions from "../../actions/calendarActions";

import Button from "components/CustomButtons/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { FormControl } from "@material-ui/core";

const localizer = BigCalendar.momentLocalizer(moment);
let events = [];

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class SemesterCalendar extends React.Component {
  constructor(props) {
    super(props);
    axios.get("/events/").then(ls => this.props.addEvents(ls));
  }

  handleClick = slot => {
    this.props.onSelect(slot.start);
  };

  render = _ => (
    <div style={{ height: 100 + "vh" }}>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable={"ignoreEvents"}
        onSelectSlot={this.handleClick}
      />
      <Dialog
        open={this.props.selectedDate !== null}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Add an event/ time table subject.
          </DialogContentText>
          <FormControl />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onDeselect} color="primary">
            Event
          </Button>
          <Button onClick={this.props.onDeselect} color="primary">
            Time Table Subject
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    selectedDate: state.selectedDate,
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: d => dispatch(calendarActions.SET_DATE(d)),
    onDeselect: _ => dispatch(calendarActions.CLEAR_DATE()),
    addEvents: es => dispatch(calendarActions.ADD_EVENT(es))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SemesterCalendar);
