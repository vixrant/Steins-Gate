import React from "react";
import { connect } from "react-redux";

// react plugin for creating charts
import ChartistGraph from "react-chartist";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import Table from "components/Table/Table";

import Client from "../../variables/client";

import { subjectWiseChart, completedTasksChart } from "variables/charts.jsx";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Component extends React.Component {
  state = {
    showDialog: false,
    attendance: [],
    subjects: [],
    tableData: []
  };

  constructor(props) {
    super(props);
    let c = new Client();
    c.getUser(this.props.user._id).then(u => {
      this.setState({
        attendance: u.attendance.map(
          e => e.lectures.attended / e.lectures.total
        ),
        subjects: u.attendance.map(e => e.subject.name)
      });

      let tD = [];
      for (let i in this.state.subjects) {
        tD.push([this.state.subjects[i], this.state.attendance[i]]);
      }
      this.setState({
        tableData: tD
      });
    });
  }

  handleClick = _ => {
    this.setState({
      showDialog: !this.state.showDialog
    });
  };

  render = _ => (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <Card chart>
          <CardHeader color="warning" onClick={this.handleClick}>
            <ChartistGraph
              className="ct-chart"
              data={subjectWiseChart.data}
              type="Bar"
              options={subjectWiseChart.options}
              responsiveOptions={subjectWiseChart.responsiveOptions}
              listener={subjectWiseChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4>Subject Wise Attendance</h4>
          </CardBody>
          <CardFooter chart>
            <div>
              <AccessTime /> For semester {this.props.user.profile.semester}
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <Card chart>
          <CardHeader color="danger">
            <ChartistGraph
              className="ct-chart"
              data={completedTasksChart.data}
              type="Line"
              options={completedTasksChart.options}
              listener={completedTasksChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h4>Attendance</h4>
            {/* <Table /> */}
          </CardBody>
          <CardFooter chart>
            <div>
              <AccessTime /> campaign sent 2 days ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <Dialog
        open={this.state.showDialog}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Your attendance"}
        </DialogTitle>
        <DialogContent>
          <Table
            tableHeaderColor="primary"
            tableHead={["Subject", "Attendance"]}
            tableData={this.state.tableData}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClick} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </GridContainer>
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
)(Component);
