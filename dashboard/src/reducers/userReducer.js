const initState = {
  user: {
    profile: {
      dateOfBirth: "2018-10-06T11:13:09.396Z",
      joinYear: 2018,
      department: {
        faculty: [],
        _id: "5bb82af8c5b01ab6d33455d1",
        name: "Computer",
        __v: 0
      }
    },
    _id: "5bb82a72c5b01ab6d33455cf",
    email: "vikrantgajria@gmail.com",
    __v: 0,
    studentId: 60004170119,
    avatar: "https://www.vikrant.ga/images/avatar.jpg",
    attendance: [
      {
        lectures: {
          total: 14,
          attended: 9
        },
        _id: "5bb83e49775699c3e3ed0332",
        subject: {
          faculty: [],
          _id: "5bb82b40c5b01ab6d33455d6",
          name: "Maths",
          reps: [],
          __v: 0
        }
      },
      {
        lectures: {
          total: 2,
          attended: 1
        },
        _id: "5bb8432e775699c3e3ed033b",
        subject: {
          faculty: [],
          _id: "5bb82b38c5b01ab6d33455d4",
          name: "OOPM",
          reps: [],
          __v: 0
        }
      },
      {
        lectures: {
          total: 3,
          attended: 0
        },
        _id: "5bb8454f775699c3e3ed033e",
        subject: {
          faculty: [],
          _id: "5bb82b3cc5b01ab6d33455d5",
          name: "DM",
          reps: [],
          __v: 0
        }
      },
      {
        lectures: {
          total: 5,
          attended: 4
        },
        _id: "5bb854ceb19017ce508e1ecd",
        subject: {
          faculty: [],
          _id: "5bb82b32c5b01ab6d33455d3",
          name: "DS",
          reps: [],
          __v: 0
        }
      },
      {
        lectures: {
          total: 1,
          attended: 1
        },
        _id: "5bb85564b19017ce508e1eda",
        subject: {
          faculty: [],
          _id: "5bb82b44c5b01ab6d33455d7",
          name: "ECCF",
          reps: [],
          __v: 0
        }
      }
    ]
  }, // ! REPLACE WITH NULL
  jwt: null,
  eventBox: false
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
        jwt: null,
        eventBox: false
      };
    }

    case "EVENT_BOX": {
      return {
        ...state,
        eventBox: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
