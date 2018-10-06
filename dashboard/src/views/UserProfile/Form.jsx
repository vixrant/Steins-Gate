import React from "react";
import { connect } from "react-redux";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.myRefs = {};
    this.inputProps = val => ({
      value: val ? val : ""
    });
  }

  render = _ => (
    <Card>
      <CardHeader color="primary">
        <div style={{ color: "white", fontSize: "20px" }}>
          <h4>Edit Profile</h4>
        </div>
      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Full Name"
              id="full-name"
              inputProps={this.inputProps(this.props.profile.name)}
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Department"
              id="department"
              inputProps={this.inputProps(
                this.props.profile.department
                  ? this.props.profile.department.name
                  : null
              )}
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Batch"
              id="batch"
              inputProps={this.inputProps(this.props.profile.batch)}
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Joining Year"
              id="postal-code"
              inputProps={this.inputProps(this.props.profile.joiningYear)}
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Semester"
              id="Semester"
              inputProps={this.inputProps(this.props.profile.semester)}
              formControlProps={{
                fullWidth: true
              }}
            />
          </GridItem>
        </GridContainer>
      </CardBody>
      <CardFooter>
        <Button color="primary">Update Profile</Button>
      </CardFooter>
    </Card>
  );
}

const mapStateToProps = state => ({
  profile: state.user.profile,
  jwt: state.jwt
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
