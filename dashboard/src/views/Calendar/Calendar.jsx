import React from "react";
import BigCalendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

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

import AddToCalendar from "react-add-to-calendar";
import "react-add-to-calendar/dist/react-add-to-calendar.min.css";

import { If } from "react-extras";

import Client from "../../variables/client";

const localizer = BigCalendar.momentLocalizer(moment);

// float
const floatStyle = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed"
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class SemesterCalendar extends React.Component {
  constructor(props) {
    super(props);
    let c = new Client();
    c.getResourceList(c.RESOURCES.events).then(ls => {
      ls = ls.map(e => {
        e.resource = e.poster;
        e.start = new Date(e.start);
        e.end = new Date(e.end);
        return e;
      });
      this.props.addEvents(ls);
    });
  }

  componentWillUnmount() {
    this.props.clearEvents();
  }

  handleClick = evnt => {
    this.props.onSelect(evnt.start);
  };

  onOk = envt => {
    let e = this.props.selectedEvent.event;
    alert(JSON.stringify(this.props.selectedEvent));
    this.props.onDeselect();
  };

  refreshEvents = _ => {
    return -1;
  };

  render = _ => (
    <div style={{ height: 100 + "vh" }}>
      <BigCalendar
        localizer={localizer}
        events={this.props.events}
        startAccessor="start"
        endAccessor="end"
        selectable={"ignoreEvents"}
        onSelectEvent={this.handleClick}
      />
      <Dialog
        open={this.props.selectedEvent !== null}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Add to your Calendar?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Add this event to your calendar?
          </DialogContentText>
          <FormControl />
        </DialogContent>
        <DialogActions>
          {this.props.selectedEvent ? (
            <AddToCalendar
              event={{
                title: this.props.selectedEvent.title,
                description:
                  "This is the sample event provided as an example only",
                startTime: this.props.selectedEvent.start,
                endTime: this.props.selectedEvent.end
              }}
            />
          ) : (
            <span />
          )}
          <Button onClick={this.props.onDeselect} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    selectedEvent: state.selectedEvent,
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: d => dispatch(calendarActions.SET_DATE(d)),
    onDeselect: _ => dispatch(calendarActions.CLEAR_DATE()),
    addEvents: es => dispatch(calendarActions.ADD_EVENT(es)),
    clearEvents: _ => dispatch(calendarActions.CLEAR_EVENT())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SemesterCalendar);
