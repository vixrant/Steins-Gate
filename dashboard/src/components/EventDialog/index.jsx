import React from "react";
import { connect } from "react-redux";

import Client from "../../variables/client";

import Button from "components/CustomButtons/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TextField } from "@material-ui/core";
import userActions from "../../actions/userActions";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Component extends React.Component {
  state = {
    titleValue: "Presentation",
    startValue: "10/13/2018",
    endValue: "10/17/2018"
  };

  handleSubmit = e => {
    let c = new Client();
    c.postResource(c.RESOURCES.events, {
      title: this.state.titleValue,
      start: this.state.startValue,
      end: this.state.endValue
    });
  };

  handleTitle = e => {
    this.setState({
      titleValue: e
    });
  };

  handleStart = e => {
    this.setState({
      startValue: e.target.value
    });
  };

  handleEnd = e => {
    this.setState({
      endValue: e.target.value
    });
  };

  // -----

  render = _ => (
    <div>
      <Dialog
        open={this.props.show == true}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"New Event"}</DialogTitle>
        <DialogContent>
          <TextField
            value={this.state.titleValue}
            label="Title"
            id="float"
            onChange={(evt, newValue) => this.handleTitle(newValue)}
            type="text"
            contentEditable={true}
          />
          <TextField
            value={this.state.startValue}
            label="Start"
            id="float"
            onChange={this.handleStart}
          />
          <TextField
            value={this.state.endValue}
            label="Start"
            id="float"
            onChange={this.handleEnd}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSubmit} color="primary">
            Add
          </Button>
          <Button onClick={this.props.hideBox} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = state => ({
  show: state.eventBox
});

const mapDispatchToProps = dispatch => ({
  showBox: _ => dispatch(userActions.EVENT_BOX(true)),
  hideBox: _ => dispatch(userActions.EVENT_BOX(false))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
