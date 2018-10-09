import React from "react";
import { connect } from "react-redux";

import Icon from "@material-ui/core/Icon";
import Store from "@material-ui/icons/Store";
import Table from "components/Table/Table.jsx";
import SeminarsIcon from "@material-ui/icons/Subscriptions";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";

import Client from "../../variables/client";

class Component extends React.Component {
  state = {
    events: []
  };

  constructor(props) {
    super(props);
    let c = new Client();
    c.getResourceList(c.RESOURCES.events).then(es => {
      this.setState({
        events: es
      });
    });
  }

  render = _ => (
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="warning">
              <SeminarsIcon />
            </CardIcon>
            <br />
            <h3>Seminars</h3>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Seminar", "Poster", "Date"]}
              tableData={[
                ["NodeJS", "Hari Vasudevan", new Date().toDateString()],
                ["Hasura", "Romil Nisar", new Date().toDateString()],
                ["Django", "Vikrant Gajria", new Date().toDateString()]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <CardHeader color="success" stats icon>
            <CardIcon color="success">
              <Store />
            </CardIcon>
            <br />
            <h3>Workshops</h3>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Workshop", "Poster", "Date"]}
              tableData={[
                ["Internships", "Hari Vasudevan", new Date().toDateString()],
                ["Hasura", "Romil Nisar", new Date().toDateString()]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <CardHeader color="danger" stats icon>
            <CardIcon color="danger">
              <Icon>info_outline</Icon>
            </CardIcon>
            <br />
            <h3>Competitions</h3>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Competition", "Poster", "Date"]}
              tableData={[
                [
                  "NodeJS",
                  "Hari Vasudevan",
                  new Date("10/09/2018").toDateString()
                ],
                [
                  "Hasura",
                  "Romil Nisar",
                  new Date("10/08/2018").toDateString()
                ],
                [
                  "Django",
                  "Vikrant Gajria",
                  new Date("10/09/2018").toDateString()
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
