import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as Sentry from "@sentry/react";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn:
      "https://59fb7f6408f14295be3845cf393face8@o293087.ingest.sentry.io/5517954"
  });
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={"An error has occurred"}>
      <div className="container">
        <App />
      </div>
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
  rootElement
);
