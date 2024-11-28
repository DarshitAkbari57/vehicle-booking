import * as actionTypes from "../ActionTypes";

const initialState = {
  bookings: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKINGS_SUCCESS:
      return {
        ...state,
        bookings: action?.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
