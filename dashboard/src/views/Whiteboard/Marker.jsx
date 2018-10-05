import React from "react";
import { connect } from "react-redux";

import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import { bugs, website, server } from "variables/general.jsx";

class Component extends React.Component {
  render = _ => (
    <CustomTabs
      title=""
      headerColor="primary"
      tabs={[
        {
          tabName: "Bugs",
          tabIcon: BugReport,
          tabContent: (
            <Tasks
              checkedIndexes={[0, 3]}
              tasksIndexes={[0, 1, 2, 3]}
              tasks={bugs}
            />
          )
        },
        {
          tabName: "Website",
          tabIcon: Code,
          tabContent: (
            <Tasks checkedIndexes={[0]} tasksIndexes={[0, 1]} tasks={website} />
          )
        },
        {
          tabName: "Server",
          tabIcon: Cloud,
          tabContent: (
            <Tasks
              checkedIndexes={[1]}
              tasksIndexes={[0, 1, 2]}
              tasks={server}
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
