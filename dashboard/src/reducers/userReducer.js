const initState = {
  user: null,
  jwt: null
};

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        user: action.payload
      };
    }

    case "SET_JWT": {
      return {
        ...state,
        jwt: action.payload
      };
    }

    case "LOGOUT": {
      return {
        user: null,
        jwt: null
      };
    }

    default: {
      return state;
    }
  }
}
