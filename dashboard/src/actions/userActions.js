export default {
  SET_USER: d => ({
    type: "SET_USER",
    payload: d
  }),
  SET_JWT: j => ({
    type: "SET_JWT",
    payload: j
  }),
  LOGOUT: _ => ({
    type: "LOGOUT"
  })
};
