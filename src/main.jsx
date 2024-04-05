import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// styles
import "./index.css";
// for reactstrap
import "bootstrap/dist/css/bootstrap.css";

import FeedbackContextProvider from "./store/feedback-context.jsx";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FeedbackContextProvider>
      <App />
    </FeedbackContextProvider>
  </React.StrictMode>
);
