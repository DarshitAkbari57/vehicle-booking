import { apiGet, apiPost, apiPut } from "../axios";
import * as actionTypes from "../ActionTypes";
import { generatePopup } from "../../utility/popup";

export const createBooking = (payload, dispatch) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.ADD_BOOKING_INIT,
    });

    try {
      const response = await apiPost("booking", payload);
      if (response.status === 201) {
        dispatch({
          type: actionTypes.ADD_BOOKING_SUCCESS,
          payload: response.data,
        });
        generatePopup("success", response?.data?.message);
      } else {
        dispatch({
          type: actionTypes.ADD_BOOKING_FAIL,
          payload: response?.data?.message,
        });
      }
      return response;
    } catch (error) {
      if (error) {
        dispatch({
          type: actionTypes.ADD_BOOKING_FAIL,
          payload: error?.data?.message,
        });
        generatePopup("error", error?.data?.error);
      }
      return error;
    }
  };
};

export const GetBooking = () => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.GET_BOOKINGS_INIT,
    });

    try {
      const response = await apiGet("booking");
      if (response.status === 200) {
        dispatch({
          type: actionTypes.GET_BOOKINGS_SUCCESS,
          payload: response.data,
        });
        return response.data;
      } else {
        dispatch({
          type: actionTypes.GET_BOOKINGS_FAIL,
          payload: response?.data?.message,
        });
        return response.data;
      }
    } catch (error) {
      console.log("error", error);
      if (error?.status === 401) {
        dispatch({
          type: actionTypes.GET_BOOKINGS_FAIL,
          payload: error?.data?.message,
        });
        localStorage.clear();
        generatePopup("error", error?.data?.message);
      }
      return error;
    }
  };
};
