import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";

import Form from "./Form";

import avatar from "assets/img/faces/marc.jpg";

import connect from "react-redux/lib/connect/connect";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import NumberIcon from "@material-ui/icons/FormatListNumbered";

import { statusToPosition } from "../../variables/statusToPosition";

import { Choose } from "react-extras";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function UserProfile(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Form />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <Choose>
                  <Choose.When condition={props.user.avatar != undefined}>
                    <img src={props.user.avatar} alt="..." />
                  </Choose.When>
                  <Choose.Otherwise>
                    <img src={avatar} alt="..." />
                  </Choose.Otherwise>
                </Choose>
              </a>
            </CardAvatar>
            <CardBody profile>
              <List>
                <ListItem>
                  <Avatar>
                    <NumberIcon />
                  </Avatar>
                  <ListItemText primary={props.user.studentId} />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                  <ListItemText
                    primary={
                      props.user.status
                        ? statusToPosition(props.user.status)
                        : statusToPosition(10)
                    }
                    secondary={
                      props.user.profile.department
                        ? props.user.profile.department.name
                        : ""
                    }
                  />
                </ListItem>
                <ListItem>
                  <Avatar>
                    <EmailIcon />
                  </Avatar>
                  <ListItemText primary={props.user.email} />
                </ListItem>
              </List>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const wrapped = withStyles(styles)(UserProfile);

const mapStateToProps = state => ({
  user: state.user,
  jwt: state.jwt
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(wrapped);
