import React from "react";

import avatar from "assets/img/faces/marc.jpg";

import connect from "react-redux/lib/connect/connect";

import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import NumberIcon from "@material-ui/icons/FormatListNumbered";

import { statusToPosition } from "../../variables/statusToPosition";

import { Choose } from "react-extras";

class Registration extends React.Component {
  render = _ => (
    <Card profile>
      <CardAvatar profile>
        <a href="#pablo" onClick={e => e.preventDefault()}>
          <Choose>
            <Choose.When condition={this.props.user.avatar != undefined}>
              <img src={this.props.user.avatar} alt="..." />
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
            <ListItemText primary={this.props.user.studentId} />
          </ListItem>
          <ListItem>
            <Avatar>
              <PersonIcon />
            </Avatar>
            <ListItemText
              primary={
                this.props.user.status
                  ? statusToPosition(this.props.user.status)
                  : statusToPosition(10)
              }
              secondary={
                this.props.user.profile.department
                  ? this.props.user.profile.department.name
                  : ""
              }
            />
          </ListItem>
          <ListItem>
            <Avatar>
              <EmailIcon />
            </Avatar>
            <ListItemText primary={this.props.user.email} />
          </ListItem>
        </List>
      </CardBody>
    </Card>
  );
}

const mapStateToProps = state => ({
  user: state.user,
  jwt: state.jwt
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
