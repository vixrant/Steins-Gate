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

import { subjectWiseChart, completedTasksChart } from "variables/charts.jsx";

class Component extends React.Component {
  render = _ => (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <Card chart>
          <CardHeader color="warning">
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
            <h4>Weekly Attendance</h4>
          </CardBody>
          <CardFooter chart>
            <div>
              <AccessTime /> campaign sent 2 days ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
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
