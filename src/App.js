import "./styles.css";
import React from "react";

// class component
// import { connect } from "react-redux";

import * as actions from "./Store/testAction";
import { useDispatch, useSelector } from "react-redux";

// functional component
export default function App() {
  const dispatch = useDispatch();
  let username = useSelector((state) => state.testReducer.username);
  let error = useSelector((state) => state.testReducer2.error);

  console.log(error);

  const login = () => {
    dispatch(actions.loginAction());
    //
  };
  return (
    <div className="App">
      <h1>Hello {username}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={login}>lOGIN</button>
    </div>
  );
}

// class base component
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1> Hello{this.props.username}</h1>
//         <h2> start editing to see some magic happen!!</h2>
//         <button onClick={() => this.props.onLogin()}>Click me </button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     username: state.username
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onLogin: dispatch(actions.loginAction())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
