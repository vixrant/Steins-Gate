export default {
  SET_DATE: d => ({
    type: "SET_DATE",
    payload: d
  }),
  CLEAR_DATE: _ => ({
    type: "CLEAR_DATE"
  }),
  ADD_EVENT: es => ({
    type: "ADD_EVENT",
    payload: es
  }),
  CLEAR_EVENT: _ => ({
    type: "CLEAR_EVENT"
  })
};
