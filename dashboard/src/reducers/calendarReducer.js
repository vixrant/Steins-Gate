const initState = {
  selectedDate: null,
  events: []
};

export default function calendarReducer(state = initState, action) {
  switch (action.type) {
    case "SET_DATE": {
      return {
        ...state,
        selectedDate: action.payload
      };
    }

    case "CLEAR_DATE": {
      return {
        ...state,
        selectedDate: null
      };
    }

    case "ADD_EVENT": {
      let events = [...state.events, ...action.payload];
      return {
        ...state,
        events
      };
    }

    default: {
      return state;
    }
  }
}
