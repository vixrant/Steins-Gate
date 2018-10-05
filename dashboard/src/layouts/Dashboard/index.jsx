import React from "react";

import { Provider } from "react-redux";
import userStore from "../../store/userStore";

import Dashboard from "./Dashboard.jsx";

// For user store.
class WebsiteWrapper extends React.Component {
  render = _ => (
    <Provider store={userStore}>
      <Dashboard {...this.props} />
    </Provider>
  );
}

export default WebsiteWrapper;
