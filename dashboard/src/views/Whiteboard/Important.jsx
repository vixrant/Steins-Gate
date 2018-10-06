import React from "react";
import { connect } from "react-redux";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import Marker from "./Marker";

class Component extends React.Component {
  render = _ => (
    <GridContainer>
      <GridItem xs={12} sm={4} md={4}>
        <Marker />
      </GridItem>
      <GridItem xs={12} sm={8} md={8}>
        <Card>
          <CardHeader color="danger">
            <h3 style={{ color: "white" }}>Upcoming exams/ important</h3>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="danger"
              tableHead={["Name", "Poster", "Date"]}
              tableData={[
                [
                  "Unit tests begin",
                  "Hari Vasudevan",
                  new Date("10/17/2018").toDateString()
                ],
                [
                  "Unit tests end",
                  "Hari Vasudevan",
                  new Date("10/17/2018").toDateString()
                ],
                [
                  "OOPM Submissions",
                  "Sindhu Sindh",
                  new Date("10/17/2018").toDateString()
                ]
              ]}
            />
          </CardBody>
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
