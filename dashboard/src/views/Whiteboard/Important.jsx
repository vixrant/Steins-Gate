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
      <GridItem xs={12} sm={12} md={6}>
        <Marker />
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
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
                  new Date().toDateString()
                ],
                ["Unit tests end", "Hari Vasudevan", new Date().toDateString()],
                ["OOPM Submissions", "$56,142", new Date().toDateString()]
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
