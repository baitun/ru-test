import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "https://59fb7f6408f14295be3845cf393face8@o293087.ingest.sentry.io/5517954",
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
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
