import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  React.createElement(React.Suspense, {
    fallback: null,
    children: React.createElement(App),
  }),
  document.getElementById("root")
);
