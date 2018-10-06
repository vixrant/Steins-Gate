import React from "react";
import { connect } from "react-redux";

import CalendarIcon from "@material-ui/icons/CalendarToday";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import { bugs } from "variables/general.jsx";

import Client from "../../variables/client";

class Component extends React.Component {
  state = {
    subjects: []
  };

  constructor(props) {
    super(props);
    let c = new Client();
    c.getResourceList(c.RESOURCES.subjects).then(subjects => {
      this.setState({
        subjects
      });
    });
  }

  render = _ => (
    <CustomTabs
      title=""
      headerColor="primary"
      tabs={[
        {
          tabName: "Today",
          tabIcon: CalendarIcon,
          tabContent: (
            <Tasks
              tasksIndexes={[...Array(this.state.subjects.length).keys()].map(
                i => i + 0
              )}
              tasks={this.state.subjects.map(e => e.name)}
            />
          )
        }
      ]}
    />
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
