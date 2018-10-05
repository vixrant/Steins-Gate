import React from "react";
import { connect } from "react-redux";

class Component extends React.Component {
  render = _ => ();
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
