import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

// Initial state
const initialState = {
  message: "",
};

// Action types
const SET_MESSAGE = "SET_MESSAGE";

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === SET_MESSAGE) {
    return {
      ...state,
      message: action.message,
    };
  }
  return state;
};

// Action creator
export const fetchMessage = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:5000/apis/app1");
    dispatch({ type: SET_MESSAGE, message: data });
  };
};

// Create store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
