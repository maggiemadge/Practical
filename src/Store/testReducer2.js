import * as actionType from "./actionsTypes";

const initialState = {
  error: false
};

const updateError = (state, action) => {
  return { ...state, error: true };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.testAction.LOGIN_FAILS:
      return updateError(state, action);

    default:
      return state;
  }
};

export default reducer;
