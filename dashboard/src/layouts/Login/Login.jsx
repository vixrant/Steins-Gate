import React from "react";
import Grid from "@material-ui/core/Grid";

import Alarm from "@material-ui/icons/Alarm";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import TextInput from "@material-ui/core/TextField";
import Button from "components/CustomButtons/Button.jsx";
import Favorite from "@material-ui/icons/Favorite";

import { BASEURL } from "../../variables/general";

class Login extends React.Component {
  state = {
    emailFieldValue: "",
    passwordFieldValue: ""
  };

  constructor(props) {
    super(props);
  }

  handleEmailChange = e => {
    this.setState({
      emailFieldValue: e.target.value
    });
  };

  handlePasswordChange = e => {
    this.setState({
      passwordFieldValue: e.target.value
    });
  };

  handleSubmit = e => {
    // axios.get("/").then(r => alert(r.data));
    // axios
    //   .get({
    //     baseURL: BASEURL,
    //     url: "/users",
    //     data: {
    //       email: "vikrantgajria@gmail.com",
    //       password: "shinchan"
    //     }
    //   })
    //   .then(res => {
    //     alert(res);
    //     if (res.data.token) {
    //       alert(res.data.token);
    //     }
    //   })
    //   .catch(alert);
  };

  render = _ => {
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={2}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="info">
                  <Alarm />
                </CardIcon>
              </CardHeader>

              <CardBody>
                <Grid container>
                  <Grid item xs={12}>
                    <TextInput
                      value={this.state.emailFieldValue}
                      label="Email"
                      id="float"
                      onChange={this.handleEmailChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput
                      label="Password"
                      type="password"
                      id="float"
                      onChange={this.handlePasswordChange}
                    />
                  </Grid>
                  <Grid item xs={12} justify="right">
                    <Button color="primary" round onClick={this.handleSubmit}>
                      <Favorite /> With Icon Log In
                    </Button>
                  </Grid>
                </Grid>
              </CardBody>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  };
}

export default Login;
