/* eslint-disable prettier/prettier */
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import LuxonUtils from "@date-io/luxon";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import Button from "@material-ui/core/Button";
import { SnackbarProvider } from "notistack";
import { Theme } from "./MaterialUI";
import { ErrorBoundary } from "./components";
import ErrorView from "./components/ErrorBoundary/ErrorView";
import "./App.css";
import Test from "./components/Test";

function App() {
  const notistackRef = React.useRef();
  /**
   *
   * @see https://reactjs.org/docs/error-boundaries.html#component-stack-traces
   * @param {Error} _error - The error caught by the error boundary.
   * @param {Object} objInfo - Additional stack trace indicating components
   * involved in the crash.
   * @returns {undefined}
   */
  // eslint-disable-next-line no-unused-vars
  const handleCrash = (_error, objInfo) => {
    // Handle crash here.
  };

  const handleDismissSnackbar = (key) =>
    notistackRef.current.closeSnackbar(key);

  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <ErrorBoundary nodeErrorView={ErrorView} onError={handleCrash}>
          <SnackbarProvider
            ref={notistackRef}
            maxSnack={3}
            action={(key) => (
              <Button
                onClick={() => handleDismissSnackbar(key)}
                size="small"
                style={{ color: "#ffffff" }}
              >
                Dismiss
              </Button>
            )}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Test />
          </SnackbarProvider>
        </ErrorBoundary>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}

export default App;
