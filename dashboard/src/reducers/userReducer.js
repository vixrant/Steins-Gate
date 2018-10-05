const initState = {
  user: {
    profile: {
      dateOfBirth: "2018-10-05T18:45:50.251Z",
      joinYear: 2018,
      name: "Vikrant Gajria",
      department: {
        faculty: [],
        _id: "5bb729c2d1f25721a16a5cac",
        batches: [],
        name: "Computer",
        __v: 0
      }
    },
    _id: "5bb73ec15974ca3047c08ff5",
    email: "vikrantgajria@gmail.com",
    __v: 0,
    status: 1,
    studentId: 60004170119,
    avatar: "https://www.vikrant.ga/images/avatar.jpg"
  }, // ! REPLACE WITH NULL

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
