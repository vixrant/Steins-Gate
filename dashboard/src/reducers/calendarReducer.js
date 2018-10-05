import calendarActions from "../actions/calendarActions";

const initState = {
  selectedDate: null
};

export default function calendarReducer(state = initState, action) {
  switch (action.type) {
    case calendarActions.SET_DATE: {
      return {
        selectedDate: action.payload
      };
    }

    case calendarActions.CLEAR_DATE: {
      return {
        selectedDate: null
      };
    }

    default: {
      return state;
    }
  }
}
