import { combineReducers } from "redux";
import vehicleTypeReducer from "./vehicleType/reducers";
import modelTypeReducer from "./vehicleModels/reducers";
import bookingReducer from "./booking/reducers";

const rootReducer = combineReducers({
  type: vehicleTypeReducer,
  model: modelTypeReducer,
  booking: bookingReducer,
});

export default rootReducer;
