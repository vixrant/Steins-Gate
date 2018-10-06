const initState = {
  selectedEvent: null,
  events: []
};

export default function calendarReducer(state = initState, action) {
  switch (action.type) {
    case "SET_DATE": {
      return {
        ...state,
        selectedEvent: action.payload
      };
    }

    case "CLEAR_DATE": {
      return {
        ...state,
        selectedEvent: null
      };
    }

    case "ADD_EVENT": {
      let events = [...state.events, ...action.payload];
      return {
        ...state,
        events
      };
    }

    case "CLEAR_EVENT": {
      return initState;
    }

    default: {
      return state;
    }
  }
}
