import React from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardHeader, CardFooter } from "../../components/Card";

const center = {
  width: 100 + "px",
  height: 100 + "px",

  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,

  margin: "auto"
};

class Login extends React.Component {
  state = {};

  render() {
    return (
      <div style={center}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={4}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="info">
                  <Alarm />
                </CardIcon>
                <p className={classes.cardCategory}>Used Space</p>
                <h3 className={classes.cardTitle}>
                  49/50 <small>GB</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Get more space
                  </a>
                </div>
              </CardFooter>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Login;
