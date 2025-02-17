import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import PracticeRoute from "./practiceRoute";

function App() {
  return (
    <Provider store={store}>
      <PracticeRoute />
    </Provider>
  );
}

export default App;
