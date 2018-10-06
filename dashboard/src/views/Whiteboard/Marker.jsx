import React from "react";
import { connect } from "react-redux";

import BugReport from "@material-ui/icons/BugReport";
import CalendarIcon from "@material-ui/icons/CalendarToday";
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
          tabName: "Today",
          tabIcon: CalendarIcon,
          tabContent: (
            <Tasks
              checkedIndexes={[0, 3]}
              tasksIndexes={[0, 1, 2, 3]}
              tasks={bugs}
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
