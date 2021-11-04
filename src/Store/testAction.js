import * as actionType from "./actionsTypes";

export const loginAction = () => {
  return {
    type: actionType.testAction.LOGIN
  };
};

export const loginSuccessAction = (userData) => {
  return {
    type: actionType.testAction.LOGIN_SUCCESS,

    payload: userData
  };
};

// import * as actionTypes from "./actionsTypes";

// export const loginAction = (userData) => {
//   return {
//     type: actionTypes.testAction.LOGIN,
//     payload: userData
//   };
// };
