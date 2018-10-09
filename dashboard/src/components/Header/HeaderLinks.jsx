import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import EventBox from "components/EventDialog/index.jsx";

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";

import { connect } from "react-redux";
import userActions from "../../actions/userActions";

import Client from "../../variables/client";

class HeaderLinks extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-label="Person"
          className={classes.buttonLink}
        >
          <Face className={classes.icons} />
          <EventBox open={this.state.eventsBox} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </Button>

        <Button
          color="white"
          aria-label="edit"
          onClick={this.props.showBox}
          justIcon
          round
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
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
)(withStyles(headerLinksStyle)(HeaderLinks));
