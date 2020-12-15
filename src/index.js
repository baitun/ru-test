import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as Sentry from "@sentry/react";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn:
      "https://59fb7f6408f14295be3845cf393face8@o293087.ingest.sentry.io/5517954",
  });
}

function FallbackComponent({ error }) {
  return (
    <>
      <h1>Что-то пошло не так...</h1>
      <h2>{error.toString()}</h2>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={FallbackComponent}>
      <div className="container">
        <App />
      </div>
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
  rootElement
);
