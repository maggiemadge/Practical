import * as actionType from "./actionsTypes";
// import { connect } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";

const initialState = {
  username: "",
  token: "",
  id: ""
};

const updateUserData = (state, action) => {
  return { ...state, username: action.payload.username };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.testAction.LOGIN_SUCCESS:
      return updateUserData(state, action);
    default:
      return state;
  }
};
export default reducer;
